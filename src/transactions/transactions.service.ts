import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto, TransactionTypeEnum } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  // Get all transactions for a user with optional filtering
  async getTransactions(
    userId: string,
    fromDate?: Date,
    toDate?: Date,
    type?: TransactionTypeEnum,
    categoryId?: string,
  ) {
    // Build the where clause dynamically based on provided filters
    const whereClause: any = { userId };

    if (fromDate) {
      whereClause.date = {
        ...(whereClause.date || {}),
        gte: fromDate,
      };
    }

    if (toDate) {
      whereClause.date = {
        ...(whereClause.date || {}),
        lte: toDate,
      };
    }

    if (type) {
      whereClause.type = type;
    }

    if (categoryId) {
      whereClause.categoryId = categoryId;
    }

    // Get transactions with category information
    const transactions = await this.prisma.transaction.findMany({
      where: whereClause,
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
      orderBy: { date: 'desc' },
    });

    return transactions;
  }

  // Get a specific transaction by ID
  async getTransactionById(userId: string, transactionId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
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

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    // Verify ownership
    if (transaction.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return transaction;
  }

  // Create a new transaction
  async createTransaction(userId: string, dto: CreateTransactionDto) {
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

      // Create the transaction
      const transaction = await this.prisma.transaction.create({
        data: {
          userId,
          amount: dto.amount,
          description: dto.description,
          notes: dto.notes,
          date: dto.date,
          type: dto.type,
          categoryId: dto.categoryId,
          billId: dto.billId,
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

      return transaction;
    } catch (error) {
      throw error;
    }
  }

  // Update an existing transaction
  async updateTransaction(userId: string, transactionId: string, dto: UpdateTransactionDto) {
    // Check if transaction exists and belongs to the user
    await this.verifyOwnership(userId, transactionId);

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

    // Update the transaction
    const updatedTransaction = await this.prisma.transaction.update({
      where: { id: transactionId },
      data: {
        ...(dto.amount !== undefined && { amount: dto.amount }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.notes !== undefined && { notes: dto.notes }),
        ...(dto.date && { date: dto.date }),
        ...(dto.type && { type: dto.type }),
        ...(dto.categoryId && { categoryId: dto.categoryId }),
        ...(dto.billId !== undefined && { billId: dto.billId }),
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

    return updatedTransaction;
  }

  // Delete a transaction
  async deleteTransaction(userId: string, transactionId: string) {
    // Check if transaction exists and belongs to the user
    await this.verifyOwnership(userId, transactionId);

    // Delete the transaction
    await this.prisma.transaction.delete({
      where: { id: transactionId },
    });

    return { message: 'Transaction deleted successfully' };
  }

  // Get transaction statistics
  async getTransactionStats(userId: string, fromDate?: Date, toDate?: Date) {
    // Build the where clause dynamically based on provided filters
    const whereClause: any = { userId };

    if (fromDate) {
      whereClause.date = {
        ...(whereClause.date || {}),
        gte: fromDate,
      };
    }

    if (toDate) {
      whereClause.date = {
        ...(whereClause.date || {}),
        lte: toDate,
      };
    }

    // Get all transactions for the period
    const transactions = await this.prisma.transaction.findMany({
      where: whereClause,
      include: {
        category: true,
      },
    });

    // Calculate income and expenses
    const totalIncome = transactions
      .filter(tx => tx.type === TransactionTypeEnum.INCOME)
      .reduce((sum, tx) => sum + tx.amount, 0);

    const totalExpenses = transactions
      .filter(tx => tx.type === TransactionTypeEnum.EXPENSE)
      .reduce((sum, tx) => sum + tx.amount, 0);

    // Calculate balance
    const balance = totalIncome - totalExpenses;

    // Category breakdown
    const categoryBreakdown = transactions.reduce((acc, tx) => {
      const categoryId = tx.categoryId;
      const categoryName = tx.category.name;
      
      if (!acc[categoryId]) {
        acc[categoryId] = {
          id: categoryId,
          name: categoryName,
          color: tx.category.color,
          icon: tx.category.icon,
          amount: 0,
          count: 0,
        };
      }
      
      acc[categoryId].amount += tx.amount;
      acc[categoryId].count += 1;
      
      return acc;
    }, {});

    // Convert to array and sort by amount descending
    const categoriesArray = Object.values(categoryBreakdown).sort(
      (a: any, b: any) => b.amount - a.amount
    );

    return {
      summary: {
        totalIncome,
        totalExpenses,
        balance,
        transactionCount: transactions.length,
      },
      categories: categoriesArray,
    };
  }

  // Helper method to verify ownership
  private async verifyOwnership(userId: string, transactionId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) {
      throw new NotFoundException('Transaction not found');
    }

    if (transaction.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return transaction;
  }
}
