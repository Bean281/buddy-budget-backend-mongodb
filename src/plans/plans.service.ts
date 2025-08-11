import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanItemDto } from './dto/create-plan-item.dto';
import { UpdatePlanItemDto } from './dto/update-plan-item.dto';
import { SavePlanDto } from './dto/save-plan.dto';
import { PlanTypeEnum, PlanItemTypeEnum } from './dto/plan-types.enum';
import { Prisma } from '@prisma/client';

// This interface would typically be in the Prisma client,
// but we're defining it here to represent plan items in our database
interface PlanItemWithCategory {
  id: string;
  description: string;
  amount: number;
  categoryId?: string;
  notes?: string;
  planType: string;
  itemType: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  // Get financial plan by type
  async getPlan(userId: string, planType: PlanTypeEnum) {
    // Get all plan items for this user and plan type
    const planItems = await this.prisma.planItem.findMany({
      where: {
        userId,
        planType,
      },
      orderBy: [
        { itemType: 'asc' },
        { amount: 'desc' }
      ],
    });

    // Group items by type
    const income = planItems.filter(item => item.itemType === PlanItemTypeEnum.INCOME);
    const expenses = planItems.filter(item => item.itemType === PlanItemTypeEnum.EXPENSE);
    const savings = planItems.filter(item => item.itemType === PlanItemTypeEnum.SAVINGS);

    // Calculate totals
    const incomeTotal = this.calculateTotal(income);
    const expensesTotal = this.calculateTotal(expenses);
    const savingsTotal = this.calculateTotal(savings);
    const balance = incomeTotal - expensesTotal - savingsTotal;

    return {
      type: planType,
      userId,
      income,
      expenses,
      savings,
      incomeTotal,
      expensesTotal,
      savingsTotal,
      balance,
      updatedAt: new Date(),
    };
  }

  // Add plan item (income, expense, or savings)
  async addPlanItem(
    userId: string,
    planType: PlanTypeEnum,
    itemType: PlanItemTypeEnum,
    dto: CreatePlanItemDto,
  ) {
    // Create new plan item
    const createdItem = await this.prisma.planItem.create({
      data: {
        description: dto.description,
        amount: dto.amount,
        categoryId: dto.categoryId,
        notes: dto.notes,
        planType,
        itemType,
        userId,
      },
    });

    return createdItem;
  }

  // Update plan item
  async updatePlanItem(
    userId: string,
    planType: PlanTypeEnum,
    itemType: PlanItemTypeEnum,
    itemId: string,
    dto: UpdatePlanItemDto,
  ) {
    // Check if item exists and belongs to the user
    const item = await this.verifyOwnership(userId, itemId);
    
    // Verify plan type and item type match
    if (item.planType !== planType || item.itemType !== itemType) {
      throw new ForbiddenException('Item does not belong to the specified plan or item type');
    }

    // Update the item
    const updatedItem = await this.prisma.planItem.update({
      where: { id: itemId },
      data: {
        description: dto.description !== undefined ? dto.description : undefined,
        amount: dto.amount !== undefined ? dto.amount : undefined,
        categoryId: dto.categoryId !== undefined ? dto.categoryId : undefined,
        notes: dto.notes !== undefined ? dto.notes : undefined,
      },
    });

    return updatedItem;
  }

  // Delete plan item
  async deletePlanItem(
    userId: string,
    planType: PlanTypeEnum,
    itemType: PlanItemTypeEnum,
    itemId: string,
  ) {
    // Check if item exists and belongs to the user
    const item = await this.verifyOwnership(userId, itemId);
    
    // Verify plan type and item type match
    if (item.planType !== planType || item.itemType !== itemType) {
      throw new ForbiddenException('Item does not belong to the specified plan or item type');
    }

    // Delete the item
    await this.prisma.planItem.delete({
      where: { id: itemId },
    });

    return { message: 'Plan item deleted successfully' };
  }

  // Save complete plan
  async savePlan(userId: string, planType: PlanTypeEnum, dto: SavePlanDto) {
    // Start a transaction to ensure all operations succeed or fail together
    return this.prisma.$transaction(async (tx) => {
      // Delete all existing items for this plan type
      await tx.planItem.deleteMany({
        where: {
          userId,
          planType,
        },
      });

      // Helper function to insert items of a specific type
      const createItems = async (items: CreatePlanItemDto[], itemType: PlanItemTypeEnum) => {
        if (!items || items.length === 0) return [];
        
        // Use the correct return type - same as what's returned by tx.planItem.create()
        type PlanItemType = Awaited<ReturnType<typeof tx.planItem.create>>;
        const createdItems: PlanItemType[] = [];
        
        for (const item of items) {
          const createdItem = await tx.planItem.create({
            data: {
              description: item.description,
              amount: item.amount,
              categoryId: item.categoryId,
              notes: item.notes,
              planType,
              itemType,
              userId,
            },
          });
          createdItems.push(createdItem);
        }
        return createdItems;
      };

      // Insert all items
      const incomeItems = await createItems(dto.income || [], PlanItemTypeEnum.INCOME);
      const expenseItems = await createItems(dto.expenses || [], PlanItemTypeEnum.EXPENSE);
      const savingsItems = await createItems(dto.savings || [], PlanItemTypeEnum.SAVINGS);

      // Calculate totals
      const incomeTotal = dto.incomeTotal || this.calculateTotal(incomeItems);
      const expensesTotal = dto.expensesTotal || this.calculateTotal(expenseItems);
      const savingsTotal = dto.savingsTotal || this.calculateTotal(savingsItems);
      const balance = incomeTotal - expensesTotal - savingsTotal;

      // Return the complete plan
      return {
        type: planType,
        userId,
        income: incomeItems,
        expenses: expenseItems,
        savings: savingsItems,
        incomeTotal,
        expensesTotal,
        savingsTotal,
        balance,
        updatedAt: new Date(),
      };
    });
  }

  // Helper method to verify ownership
  private async verifyOwnership(userId: string, itemId: string) {
    const item = await this.prisma.planItem.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new NotFoundException('Plan item not found');
    }

    if (item.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return item;
  }

  // Helper method to calculate total amount
  private calculateTotal(items: { amount: number }[]): number {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }
} 