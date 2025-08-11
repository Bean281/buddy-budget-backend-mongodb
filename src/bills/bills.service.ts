import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PayBillDto } from './dto/pay-bill.dto';
import { BillStatusEnum } from './models/bill.model';
import { TransactionTypeEnum } from 'src/transactions/dto/create-transaction.dto';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  // Get all bills for a user with optional status filtering
  async getBills(userId: string, status?: BillStatusEnum) {
    // Fetch all bills for the user
    const bills = await this.prisma.bill.findMany({
      where: { userId },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
      orderBy: { dueDate: 'asc' },
    });

    // Extend bills with calculated status and daysUntilDue
    const extendedBills = bills.map(bill => {
      const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(bill);
      return {
        ...bill,
        status: calculatedStatus,
        daysUntilDue,
        lastPaymentDate: null, // This would typically come from a transactions table in a real app
      };
    });

    // Filter by status if requested
    if (status) {
      return extendedBills.filter(bill => bill.status === status);
    }

    return extendedBills;
  }

  // Get bill reminders for the next X days
  async getBillReminders(userId: string, days: number) {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + days);

    // Fetch bills due in the specified period
    const bills = await this.prisma.bill.findMany({
      where: {
        userId,
        dueDate: {
          gte: today,
          lte: futureDate,
        },
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
      orderBy: { dueDate: 'asc' },
    });

    // Extend bills with calculated status and daysUntilDue
    return bills.map(bill => {
      const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(bill);
      return {
        ...bill,
        status: calculatedStatus,
        daysUntilDue,
        lastPaymentDate: null, // This would typically come from a transactions table in a real app
      };
    });
  }

  // Get a specific bill by ID
  async getBillById(userId: string, billId: string) {
    const bill = await this.prisma.bill.findUnique({
      where: { id: billId },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
    });

    if (!bill) {
      throw new NotFoundException('Bill not found');
    }

    // Verify ownership
    if (bill.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    // Calculate status and days until due
    const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(bill);

    return {
      ...bill,
      status: calculatedStatus,
      daysUntilDue,
      lastPaymentDate: null, // This would typically come from a transactions table in a real app
    };
  }

  // Create a new bill
  async createBill(userId: string, dto: CreateBillDto) {
    try {
      // Verify that the category exists and belongs to the user
      const category = await this.prisma.category.findFirst({
        where: {
          id: dto.categoryId,
          userId,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found or does not belong to user');
      }

      // Create the bill
      const bill = await this.prisma.bill.create({
        data: {
          userId,
          name: dto.name,
          amount: dto.amount,
          dueDate: dto.dueDate,
          frequency: dto.frequency,
          autopay: dto.autopay || false,
          notes: dto.notes,
          categoryId: dto.categoryId,
        },
        include: {
          category: {
            select: {
              id: true,
              name: true,
              icon: true,
              color: true,
            },
          },
        },
      });

      // Calculate status and days until due
      const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(bill);

      return {
        ...bill,
        status: calculatedStatus,
        daysUntilDue,
        lastPaymentDate: null,
      };
    } catch (error) {
      throw error;
    }
  }

  // Update an existing bill
  async updateBill(userId: string, billId: string, dto: UpdateBillDto) {
    // Check if bill exists and belongs to the user
    await this.verifyOwnership(userId, billId);

    // If categoryId is provided, verify that it exists and belongs to the user
    if (dto.categoryId) {
      const category = await this.prisma.category.findFirst({
        where: {
          id: dto.categoryId,
          userId,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found or does not belong to user');
      }
    }

    // Update the bill
    const updatedBill = await this.prisma.bill.update({
      where: { id: billId },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.amount !== undefined && { amount: dto.amount }),
        ...(dto.dueDate && { dueDate: dto.dueDate }),
        ...(dto.frequency && { frequency: dto.frequency }),
        ...(dto.autopay !== undefined && { autopay: dto.autopay }),
        ...(dto.notes !== undefined && { notes: dto.notes }),
        ...(dto.categoryId && { categoryId: dto.categoryId }),
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
    });

    // Calculate status and days until due
    const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(updatedBill);

    return {
      ...updatedBill,
      status: calculatedStatus,
      daysUntilDue,
      lastPaymentDate: null,
    };
  }

  // Mark a bill as paid
  async markBillAsPaid(userId: string, billId: string, dto: PayBillDto) {
    // Check if bill exists and belongs to the user
    const bill = await this.verifyOwnership(userId, billId);

    // Use provided payment date or current date
    const paymentDate = dto.paymentDate || new Date();

    // Calculate the next due date based on frequency
    const nextDueDate = this.calculateNextDueDate(bill.dueDate, bill.frequency);

    // Update the bill with new due date
    const updatedBill = await this.prisma.bill.update({
      where: { id: billId },
      data: {
        dueDate: nextDueDate,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
    });

    // Create a transaction record if requested
    const createTransaction = dto.createTransaction !== false; // Default to true
    if (createTransaction) {
      await this.prisma.transaction.create({
        data: {
          userId,
          amount: bill.amount,
          date: paymentDate,
          description: `Payment for ${bill.name}`,
          type: TransactionTypeEnum.EXPENSE,
          categoryId: bill.categoryId,
          billId: bill.id,
        },
      });
    }

    // Calculate status and days until due for the updated bill
    const { calculatedStatus, daysUntilDue } = this.calculateBillStatus(updatedBill);

    return {
      ...updatedBill,
      status: calculatedStatus,
      daysUntilDue,
      lastPaymentDate: paymentDate,
    };
  }

  // Delete a bill
  async deleteBill(userId: string, billId: string) {
    // Check if bill exists and belongs to the user
    await this.verifyOwnership(userId, billId);

    // Delete the bill
    await this.prisma.bill.delete({
      where: { id: billId },
    });

    return { message: 'Bill deleted successfully' };
  }

  // Helper method to verify ownership
  private async verifyOwnership(userId: string, billId: string) {
    const bill = await this.prisma.bill.findUnique({
      where: { id: billId },
    });

    if (!bill) {
      throw new NotFoundException('Bill not found');
    }

    if (bill.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return bill;
  }

  // Helper method to calculate bill status and days until due
  private calculateBillStatus(bill: any) {
    const today = new Date();
    const dueDate = new Date(bill.dueDate);
    
    // Calculate days until due (negative if overdue)
    const diffTime = dueDate.getTime() - today.getTime();
    const daysUntilDue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Determine status
    let calculatedStatus: BillStatusEnum;
    
    if (daysUntilDue < 0) {
      calculatedStatus = BillStatusEnum.OVERDUE;
    } else {
      calculatedStatus = BillStatusEnum.UPCOMING;
    }
    
    // If there was a payment record, we would check if it was paid
    // This is simplistic since we don't have a payment records table
    
    return { calculatedStatus, daysUntilDue };
  }

  // Helper method to calculate the next due date based on frequency
  private calculateNextDueDate(currentDueDate: Date, frequency: string): Date {
    const nextDueDate = new Date(currentDueDate);
    
    switch (frequency) {
      case 'DAILY':
        nextDueDate.setDate(nextDueDate.getDate() + 1);
        break;
      case 'WEEKLY':
        nextDueDate.setDate(nextDueDate.getDate() + 7);
        break;
      case 'BIWEEKLY':
        nextDueDate.setDate(nextDueDate.getDate() + 14);
        break;
      case 'MONTHLY':
        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
        break;
      case 'QUARTERLY':
        nextDueDate.setMonth(nextDueDate.getMonth() + 3);
        break;
      case 'BIANNUALLY':
        nextDueDate.setMonth(nextDueDate.getMonth() + 6);
        break;
      case 'ANNUALLY':
        nextDueDate.setFullYear(nextDueDate.getFullYear() + 1);
        break;
      default:
        // If unknown frequency, default to monthly
        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
    }
    
    return nextDueDate;
  }
}
