import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddFundsDto, CreateSavingsGoalDto, UpdateSavingsGoalDto } from './dto';

@Injectable()
export class SavingsGoalsService {
  constructor(private prisma: PrismaService) {}

  // Get all goals for a user with optional status filter
  async getGoals(userId: string, status?: 'active' | 'completed') {
    const whereClause: any = { userId };
    
    if (status === 'active') {
      whereClause.completed = false;
    } else if (status === 'completed') {
      whereClause.completed = true;
    }

    const goals = await this.prisma.savingsGoal.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });

    // Add additional calculated fields
    return goals.map(goal => {
      const progressPercentage = goal.targetAmount > 0 
        ? Math.min(100, (goal.currentAmount / goal.targetAmount) * 100) 
        : 0;
      
      const daysRemaining = goal.targetDate 
        ? Math.max(0, Math.ceil((new Date(goal.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) 
        : null;

      return {
        ...goal,
        progressPercentage,
        daysRemaining,
      };
    });
  }

  // Create a new savings goal
  async createGoal(userId: string, dto: CreateSavingsGoalDto) {
    try {
      // Use transaction to ensure both operations succeed or fail together
      const result = await this.prisma.$transaction(async (prisma) => {
        const goal = await prisma.savingsGoal.create({
          data: {
            userId,
            name: dto.name,
            targetAmount: dto.targetAmount,
            currentAmount: dto.currentAmount || 0,
            targetDate: dto.targetDate,
            notes: dto.notes,
            completed: false,
          },
        });

        // If there's an initial current amount, create a plan item
        if (goal.currentAmount > 0) {
          const currentDate = new Date();
          const currentMonthPlan = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
          
          await prisma.planItem.create({
            data: {
              userId,
              description: `Savings: ${goal.name}`,
              amount: goal.currentAmount,
              notes: `Initial savings for ${goal.name}`,
              planType: currentMonthPlan,
              itemType: 'SAVINGS',
            },
          });
        }

        return goal;
      });

      const progressPercentage = result.targetAmount > 0 
        ? Math.min(100, (result.currentAmount / result.targetAmount) * 100) 
        : 0;
      
      const daysRemaining = result.targetDate 
        ? Math.max(0, Math.ceil((new Date(result.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) 
        : null;

      return {
        ...result,
        progressPercentage,
        daysRemaining,
      };
    } catch (error) {
      throw error;
    }
  }

  // Update an existing savings goal
  async updateGoal(userId: string, goalId: string, dto: UpdateSavingsGoalDto) {
    // Check if goal exists and belongs to the user
    const goal = await this.verifyOwnership(userId, goalId);

    // Use transaction if name is being updated (need to sync plan items)
    const result = await this.prisma.$transaction(async (prisma) => {
      // Update the goal
      const updatedGoal = await prisma.savingsGoal.update({
        where: { id: goalId },
        data: {
          ...(dto.name && { name: dto.name }),
          ...(dto.targetAmount && { targetAmount: dto.targetAmount }),
          ...(dto.targetDate && { targetDate: dto.targetDate }),
          ...(dto.notes !== undefined && { notes: dto.notes }),
        },
      });

      // If name was updated, update all related plan items
      if (dto.name && dto.name !== goal.name) {
        await prisma.planItem.updateMany({
          where: {
            userId,
            itemType: 'SAVINGS',
            description: { contains: goal.name },
          },
          data: {
            description: `Savings: ${dto.name}`,
            notes: `Updated from "${goal.name}" to "${dto.name}"`,
          },
        });
      }

      return updatedGoal;
    });

    const progressPercentage = result.targetAmount > 0 
      ? Math.min(100, (result.currentAmount / result.targetAmount) * 100) 
      : 0;
    
    const daysRemaining = result.targetDate 
      ? Math.max(0, Math.ceil((new Date(result.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) 
      : null;

    return {
      ...result,
      progressPercentage,
      daysRemaining,
    };
  }

  // Delete a savings goal
  async deleteGoal(userId: string, goalId: string) {
    // Check if goal exists and belongs to the user
    const goal = await this.verifyOwnership(userId, goalId);

    // Use transaction to ensure both operations succeed or fail together
    await this.prisma.$transaction(async (prisma) => {
      // Delete related plan items first
      await prisma.planItem.deleteMany({
        where: {
          userId,
          itemType: 'SAVINGS',
          description: { contains: goal.name },
        },
      });

      // Delete the goal
      await prisma.savingsGoal.delete({
        where: { id: goalId },
      });
    });

    return { message: 'Goal deleted successfully' };
  }

  // Add funds to a savings goal
  async addFunds(userId: string, goalId: string, dto: AddFundsDto) {
    // Check if goal exists and belongs to the user
    const goal = await this.verifyOwnership(userId, goalId);

    // Check if goal is already completed
    if (goal.completed) {
      throw new ForbiddenException('Cannot add funds to a completed goal');
    }

    // Use transaction to ensure both operations succeed or fail together
    const result = await this.prisma.$transaction(async (prisma) => {
      // Update the current amount in savings goal
      const newAmount = goal.currentAmount + dto.amount;
      const isCompleted = newAmount >= goal.targetAmount;

      const updatedGoal = await prisma.savingsGoal.update({
        where: { id: goalId },
        data: {
          currentAmount: newAmount,
          completed: isCompleted,
        },
      });

      // Create or update savings plan item to sync with dashboard
      const planItemDescription = `Savings: ${goal.name}`;
      
      // Check if there's already a savings plan item for current month
      const currentDate = new Date();
      const currentMonthPlan = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
      
      const existingSavingsItem = await prisma.planItem.findFirst({
        where: {
          userId,
          itemType: 'SAVINGS',
          planType: currentMonthPlan,
          description: { contains: goal.name },
        },
      });

      if (existingSavingsItem) {
        // Update existing plan item by adding the new amount
        await prisma.planItem.update({
          where: { id: existingSavingsItem.id },
          data: {
            amount: existingSavingsItem.amount + dto.amount,
            notes: `${existingSavingsItem.notes || ''}\nAdded $${dto.amount} on ${new Date().toISOString().split('T')[0]}`,
            updatedAt: new Date(),
          },
        });
      } else {
        // Create new savings plan item
        await prisma.planItem.create({
          data: {
            userId,
            description: planItemDescription,
            amount: dto.amount,
            notes: `Funds added to ${goal.name}`,
            planType: currentMonthPlan,
            itemType: 'SAVINGS',
          },
        });
      }

      return updatedGoal;
    });

    const progressPercentage = result.targetAmount > 0 
      ? Math.min(100, (result.currentAmount / result.targetAmount) * 100) 
      : 0;
    
    const daysRemaining = result.targetDate 
      ? Math.max(0, Math.ceil((new Date(result.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) 
      : null;

    return {
      ...result,
      progressPercentage,
      daysRemaining,
    };
  }

  // Mark a goal as completed
  async completeGoal(userId: string, goalId: string) {
    // Check if goal exists and belongs to the user
    const goal = await this.verifyOwnership(userId, goalId);

    // Check if goal is already completed
    if (goal.completed) {
      throw new ForbiddenException('Goal is already completed');
    }

    // Mark the goal as completed
    const completedGoal = await this.prisma.savingsGoal.update({
      where: { id: goalId },
      data: { completed: true },
    });

    const progressPercentage = completedGoal.targetAmount > 0 
      ? Math.min(100, (completedGoal.currentAmount / completedGoal.targetAmount) * 100) 
      : 0;

    return {
      ...completedGoal,
      progressPercentage,
      daysRemaining: 0,
    };
  }

  // Sync savings goals with dashboard plan items (repair inconsistencies)
  async syncGoalsWithDashboard(userId: string) {
    return await this.prisma.$transaction(async (prisma) => {
      // Get all savings goals
      const savingsGoals = await prisma.savingsGoal.findMany({
        where: { userId },
      });

      // Get current month plan
      const currentDate = new Date();
      const currentMonthPlan = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

      // Delete all existing savings plan items for current month to start fresh
      await prisma.planItem.deleteMany({
        where: {
          userId,
          itemType: 'SAVINGS',
          planType: currentMonthPlan,
        },
      });

      // Create new plan items for each goal with current amount > 0
      const createdItems: any[] = [];
      for (const goal of savingsGoals) {
        if (goal.currentAmount > 0) {
          const planItem = await prisma.planItem.create({
            data: {
              userId,
              description: `Savings: ${goal.name}`,
              amount: goal.currentAmount,
              notes: `Synced savings for ${goal.name}`,
              planType: currentMonthPlan,
              itemType: 'SAVINGS',
            },
          });
          createdItems.push(planItem);
        }
      }

      // Calculate totals after sync
      const totalActualSavings = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
      const totalDashboardSavings = createdItems.reduce((sum, item) => sum + item.amount, 0);

      return {
        message: 'Savings goals synced with dashboard successfully',
        goalsCount: savingsGoals.length,
        totalActualSavings,
        totalDashboardSavings,
        syncedItemsCount: createdItems.length,
        syncStatus: totalActualSavings === totalDashboardSavings ? 'synced' : 'error',
        period: currentMonthPlan,
      };
    });
  }

  // Get savings analytics - compare actual vs planned savings
  async getSavingsAnalytics(userId: string, period?: string) {
    const currentDate = new Date();
    const currentMonthPlan = period || `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

    // Get total from all savings goals (actual savings)
    const savingsGoals = await this.prisma.savingsGoal.findMany({
      where: { userId },
    });

    const totalActualSavings = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
    const totalTargetSavings = savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0);

    // Get planned savings from plan items (this affects dashboard savingsTotal)
    const plannedSavings = await this.prisma.planItem.findMany({
      where: {
        userId,
        itemType: 'SAVINGS',
        planType: currentMonthPlan,
      },
    });

    const totalPlannedSavings = plannedSavings.reduce((sum, item) => sum + item.amount, 0);

    // Calculate analytics
    const savingsProgress = totalTargetSavings > 0 
      ? (totalActualSavings / totalTargetSavings) * 100 
      : 0;

    const planVsActual = totalPlannedSavings > 0 
      ? (totalActualSavings / totalPlannedSavings) * 100 
      : 100; // If no plan, actual is 100% of the plan

    const remainingToTarget = Math.max(0, totalTargetSavings - totalActualSavings);
    const dashboardTotal = totalPlannedSavings; // This is what shows in dashboard

    // Get individual goals with progress
    const goalsWithProgress = savingsGoals.map(goal => {
      const progressPercentage = goal.targetAmount > 0 
        ? Math.min(100, (goal.currentAmount / goal.targetAmount) * 100) 
        : 0;
      
      const daysRemaining = goal.targetDate 
        ? Math.max(0, Math.ceil((new Date(goal.targetDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) 
        : null;

      return {
        ...goal,
        progressPercentage,
        daysRemaining,
      };
    });

    return {
      period: currentMonthPlan,
      totalActualSavings,
      totalTargetSavings,
      dashboardSavingsTotal: dashboardTotal,
      savingsProgress: Math.round(savingsProgress * 100) / 100,
      remainingToTarget,
      syncStatus: totalActualSavings === dashboardTotal ? 'synced' : 'needs_sync',
      goals: goalsWithProgress,
      plannedItems: plannedSavings,
    };
  }

  // Get historical savings data across multiple months
  async getSavingsHistory(userId: string, months?: number) {
    const monthsToRetrieve = months || 6; // Default 6 months
    const currentDate = new Date();
    
    // Generate list of months to check
    const monthsList: any[] = [];
    for (let i = 0; i < monthsToRetrieve; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      monthsList.push({
        key: monthKey,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        monthName: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
      });
    }

    // Get savings data for each month
    const historyData: any[] = [];
    for (const monthData of monthsList) {
      const plannedSavings = await this.prisma.planItem.findMany({
        where: {
          userId,
          itemType: 'SAVINGS',
          planType: monthData.key,
        },
      });

      const totalSaved = plannedSavings.reduce((sum, item) => sum + item.amount, 0);
      
      historyData.push({
        period: monthData.key,
        periodName: monthData.monthName,
        totalSaved,
        itemsCount: plannedSavings.length,
        items: plannedSavings.map(item => ({
          id: item.id,
          description: item.description,
          amount: item.amount,
          notes: item.notes,
          createdAt: item.createdAt,
        })),
      });
    }

    // Calculate summary statistics
    const totalAcrossAllMonths = historyData.reduce((sum, month) => sum + month.totalSaved, 0);
    const averagePerMonth = totalAcrossAllMonths / monthsToRetrieve;
    const highestMonth = historyData.reduce((max, month) => 
      month.totalSaved > max.totalSaved ? month : max, 
      { totalSaved: 0, periodName: 'None' }
    );

    return {
      summary: {
        totalMonths: monthsToRetrieve,
        totalAcrossAllMonths,
        averagePerMonth: Math.round(averagePerMonth * 100) / 100,
        highestMonth: {
          period: highestMonth.periodName,
          amount: highestMonth.totalSaved,
        },
      },
      history: historyData.reverse(), // Most recent first
    };
  }

  // Helper method to verify ownership
  private async verifyOwnership(userId: string, goalId: string) {
    const goal = await this.prisma.savingsGoal.findUnique({
      where: { id: goalId },
    });

    if (!goal) {
      throw new NotFoundException('Goal not found');
    }

    if (goal.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return goal;
  }
} 