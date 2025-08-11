import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BudgetPeriodEnum } from './dto/dashboard-params.dto';
import { TransactionTypeEnum } from 'src/transactions/dto/create-transaction.dto';
import { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, format } from 'date-fns';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get financial summary for a user within a date range
   * 
   * @param userId - Current authenticated user ID
   * @param fromDate - Optional start date for the period
   * @param toDate - Optional end date for the period
   * @returns Financial summary data
   */
  async getFinancialSummary(userId: string, fromDate?: Date, toDate?: Date) {
    // Set default dates to current month if not provided
    const now = new Date();
    const startDate = fromDate || startOfMonth(now);
    const endDate = toDate || endOfMonth(now);

    // Build the where clause for transactions
    const whereClause = {
      userId,
      date: {
        gte: startDate,
        lte: endDate,
      },
    };

    // Get all transactions for the period
    const transactions = await this.prisma.transaction.findMany({
      where: whereClause,
    });

    // Calculate totals
    const incomeTotal = transactions
      .filter(tx => tx.type === TransactionTypeEnum.INCOME)
      .reduce((sum, tx) => sum + tx.amount, 0);

    const expenseTotal = transactions
      .filter(tx => tx.type === TransactionTypeEnum.EXPENSE)
      .reduce((sum, tx) => sum + tx.amount, 0);

    // Get savings plan items
    const savingsItems = await this.prisma.planItem.findMany({
      where: {
        userId,
        itemType: 'SAVINGS',
      },
    });

    const savingsTotal = savingsItems.reduce((sum, item) => sum + item.amount, 0);

    // Calculate remaining amount
    const remainingAmount = incomeTotal - expenseTotal - savingsTotal;

    return {
      incomeTotal,
      expenseTotal,
      savingsTotal,
      remainingAmount,
      startDate,
      endDate,
    };
  }

  /**
   * Get spending information for today
   * 
   * @param userId - Current authenticated user ID
   * @returns Today's spending data
   */
  async getTodaySpending(userId: string) {
    const today = new Date();
    const startOfToday = startOfDay(today);
    const endOfToday = endOfDay(today);

    // Get today's transactions
    const todayTransactions = await this.prisma.transaction.findMany({
      where: {
        userId,
        type: TransactionTypeEnum.EXPENSE,
        date: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });

    // Calculate total spent today
    const totalSpentToday = todayTransactions.reduce((sum, tx) => sum + tx.amount, 0);
    const transactionCount = todayTransactions.length;

    // Get monthly budget for the user
    const monthlyBudget = await this.prisma.budget.findFirst({
      where: {
        userId,
        type: 'MONTHLY',
        startDate: {
          lte: today,
        },
        endDate: {
          gte: today,
        },
      },
    });

    // Calculate daily budget (monthly budget / days in month)
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const dailyBudget = monthlyBudget 
      ? monthlyBudget.amount / daysInMonth 
      : 0;

    // Calculate remaining budget
    const remainingBudget = Math.max(0, dailyBudget - totalSpentToday);

    return {
      totalSpentToday,
      transactionCount,
      dailyBudget,
      remainingBudget,
      date: today,
    };
  }

  /**
   * Get budget progress for a specific period
   * 
   * @param userId - Current authenticated user ID
   * @param period - Budget period (weekly/monthly)
   * @returns Budget progress data
   */
  async getBudgetProgress(userId: string, period: BudgetPeriodEnum) {
    const now = new Date();
    let startDate: Date;
    let endDate: Date;
    let budgetType: string;

    // Set date range and budget type based on period
    if (period === BudgetPeriodEnum.WEEKLY) {
      startDate = startOfWeek(now, { weekStartsOn: 0 }); // 0 = Sunday
      endDate = endOfWeek(now, { weekStartsOn: 0 });
      budgetType = 'WEEKLY';
    } else {
      startDate = startOfMonth(now);
      endDate = endOfMonth(now);
      budgetType = 'MONTHLY';
    }

    // Get all expenses in the period
    const expenses = await this.prisma.transaction.findMany({
      where: {
        userId,
        type: TransactionTypeEnum.EXPENSE,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    // Get the budget for the period
    const budget = await this.prisma.budget.findFirst({
      where: {
        userId,
        // @ts-ignore - Prisma enum types are imported differently in generated code
        type: budgetType,
        startDate: {
          lte: now,
        },
        endDate: {
          gte: now,
        },
      },
    });

    // Calculate current spending
    const currentSpending = expenses.reduce((sum, tx) => sum + tx.amount, 0);
    
    // Get target budget amount
    const targetBudget = budget ? budget.amount : 0;
    
    // Calculate percentage used and remaining amount
    const percentageUsed = targetBudget > 0 
      ? (currentSpending / targetBudget) * 100 
      : 0;
    
    const remainingAmount = Math.max(0, targetBudget - currentSpending);

    return {
      currentSpending,
      targetBudget,
      percentageUsed,
      remainingAmount,
      period,
      startDate,
      endDate,
    };
  }

  /**
   * Get recent expenses for a user
   * 
   * @param userId - Current authenticated user ID
   * @param limit - Maximum number of expenses to return
   * @returns Recent expenses data grouped by day
   */
  async getRecentExpenses(userId: string, limit: number = 10) {
    // Get recent expense transactions
    const expenses = await this.prisma.transaction.findMany({
      where: {
        userId,
        type: TransactionTypeEnum.EXPENSE,
      },
      orderBy: {
        date: 'desc',
      },
      take: limit,
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

    // Group expenses by day
    const expensesByDay = expenses.reduce((groups, expense) => {
      const dateStr = format(expense.date, 'yyyy-MM-dd');
      
      if (!groups[dateStr]) {
        groups[dateStr] = {
          date: startOfDay(expense.date),
          expenses: [],
          totalAmount: 0,
        };
      }
      
      groups[dateStr].expenses.push(expense);
      groups[dateStr].totalAmount += expense.amount;
      
      return groups;
    }, {});

    // Convert to array and sort by date descending
    const days = Object.values(expensesByDay).sort((a: any, b: any) => 
      b.date.getTime() - a.date.getTime()
    );

    // Calculate total amount and count
    const totalAmount = expenses.reduce((sum, tx) => sum + tx.amount, 0);
    const count = expenses.length;

    return {
      days,
      totalAmount,
      count,
    };
  }

  /**
   * Clear only transactions for a user
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared transactions
   */
  async clearTransactions(userId: string) {
    const transactionCount = await this.prisma.transaction.count({ where: { userId } });
    
    await this.prisma.transaction.deleteMany({ where: { userId } });
    
    return {
      message: 'All transactions cleared successfully',
      clearedCount: transactionCount,
      dataType: 'transactions',
      timestamp: new Date(),
    };
  }

  /**
   * Clear only bills for a user
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared bills
   */
  async clearBills(userId: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const billCount = await prisma.bill.count({ where: { userId } });
      
      // Delete transactions related to bills first
      await prisma.transaction.deleteMany({
        where: {
          userId,
          billId: { not: null }
        }
      });
      
      // Then delete bills
      await prisma.bill.deleteMany({ where: { userId } });
      
      return {
        message: 'All bills and related transactions cleared successfully',
        clearedCount: billCount,
        dataType: 'bills',
        timestamp: new Date(),
      };
    });
  }

  /**
   * Clear only savings goals for a user
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared goals
   */
  async clearSavingsGoals(userId: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const goalCount = await prisma.savingsGoal.count({ where: { userId } });
      
      // Delete related plan items first
      await prisma.planItem.deleteMany({
        where: {
          userId,
          itemType: 'SAVINGS'
        }
      });
      
      // Then delete savings goals
      await prisma.savingsGoal.deleteMany({ where: { userId } });
      
      return {
        message: 'All savings goals and related plan items cleared successfully',
        clearedCount: goalCount,
        dataType: 'savings_goals',
        timestamp: new Date(),
      };
    });
  }

  /**
   * Clear all user data - transactions, bills, goals, plan items
   * This will reset all financial data for the user
   * 
   * @param userId - Current authenticated user ID
   * @returns Summary of cleared data
   */
  async clearAllUserData(userId: string) {
    return await this.prisma.$transaction(async (prisma) => {
      // Count existing data before deletion
      const [transactionCount, billCount, goalCount, planItemCount, budgetCount, categoryCount] = await Promise.all([
        prisma.transaction.count({ where: { userId } }),
        prisma.bill.count({ where: { userId } }),
        prisma.savingsGoal.count({ where: { userId } }),
        prisma.planItem.count({ where: { userId } }),
        prisma.budget.count({ where: { userId } }),
        prisma.category.count({ where: { userId, isDefault: false } }), // Only user-created categories
      ]);

      // Delete all user data in the correct order (respecting foreign key constraints)
      await Promise.all([
        // Delete transactions (they reference categories and bills)
        prisma.transaction.deleteMany({ where: { userId } }),
        
        // Delete category allocations (they reference budgets and categories)
        prisma.categoryAllocation.deleteMany({
          where: {
            budget: { userId }
          }
        }),
        
        // Delete savings goals
        prisma.savingsGoal.deleteMany({ where: { userId } }),
        
        // Delete plan items
        prisma.planItem.deleteMany({ where: { userId } }),
        
        // Delete bills
        prisma.bill.deleteMany({ where: { userId } }),
        
        // Delete budgets
        prisma.budget.deleteMany({ where: { userId } }),
        
        // Delete user-created categories (keep default ones)
        prisma.category.deleteMany({ 
          where: { 
            userId,
            isDefault: false 
          } 
        }),
      ]);

      return {
        message: 'All user data cleared successfully',
        clearedData: {
          transactions: transactionCount,
          bills: billCount,
          savingsGoals: goalCount,
          planItems: planItemCount,
          budgets: budgetCount,
          userCategories: categoryCount,
        },
        timestamp: new Date(),
      };
    });
  }
}
