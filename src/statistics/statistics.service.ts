import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BudgetComparisonTypeEnum, TimePeriodEnum } from './dto/statistics-params.dto';
import { TransactionTypeEnum } from 'src/transactions/dto/create-transaction.dto';
import { 
  addDays, addMonths, differenceInDays, endOfDay, endOfMonth, endOfWeek, 
  format, getMonth, getYear, isAfter, isBefore, startOfDay, startOfMonth, 
  startOfWeek, subMonths, subDays
} from 'date-fns';
import {
  PeriodDataPoint,
  CategoryDataPoint,
  MonthlyDataPoint,
  DailyDataPoint,
  BudgetCategoryDataPoint
} from './models/data-points.model';

@Injectable()
export class StatisticsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get income vs expenses chart data
   * 
   * @param userId - Current authenticated user ID
   * @param period - Time period for grouping (week/month)
   * @param months - Number of months to include
   * @returns Income vs expenses chart data
   */
  async getIncomeExpensesChart(userId: string, period: TimePeriodEnum, months: number = 3) {
    const now = new Date();
    const endDate = endOfMonth(now);
    const startDate = startOfMonth(subMonths(now, months - 1));
    
    // Get all transactions for the period
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Group transactions by period (week or month)
    const periodData: PeriodDataPoint[] = [];
    
    if (period === TimePeriodEnum.MONTH) {
      // Group by month
      const monthGroups: Record<string, PeriodDataPoint> = {};
      
      // Create month groups for the entire range
      let currentDate = new Date(startDate);
      while (!isAfter(currentDate, endDate)) {
        const year = getYear(currentDate);
        const month = getMonth(currentDate);
        const monthKey = `${year}-${month}`;
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(currentDate);
        
        monthGroups[monthKey] = {
          label: format(monthStart, 'MMM yyyy'),
          income: 0,
          expense: 0,
          net: 0,
          startDate: monthStart,
          endDate: monthEnd,
        };
        
        currentDate = addMonths(currentDate, 1);
      }
      
      // Add transaction amounts to appropriate months
      transactions.forEach(tx => {
        const txDate = new Date(tx.date);
        const year = getYear(txDate);
        const month = getMonth(txDate);
        const monthKey = `${year}-${month}`;
        
        if (monthGroups[monthKey]) {
          if (tx.type === TransactionTypeEnum.INCOME) {
            monthGroups[monthKey].income += tx.amount;
          } else {
            monthGroups[monthKey].expense += tx.amount;
          }
        }
      });
      
      // Calculate net amount and sort by date
      Object.keys(monthGroups).forEach(key => {
        const group = monthGroups[key];
        group.net = group.income - group.expense;
        periodData.push(group);
      });
    } else {
      // Group by week
      const weekGroups: Record<string, PeriodDataPoint> = {};
      
      // Create week groups for the entire range
      let currentDate = startOfWeek(startDate, { weekStartsOn: 0 });
      let weekCounter = 1;
      
      while (!isAfter(currentDate, endDate)) {
        const weekStart = currentDate;
        const weekEnd = endOfWeek(currentDate, { weekStartsOn: 0 });
        const weekKey = format(weekStart, 'yyyy-MM-dd');
        
        weekGroups[weekKey] = {
          label: `Week ${weekCounter} (${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d')})`,
          income: 0,
          expense: 0,
          net: 0,
          startDate: weekStart,
          endDate: weekEnd,
        };
        
        currentDate = addDays(weekEnd, 1);
        weekCounter++;
      }
      
      // Add transaction amounts to appropriate weeks
      transactions.forEach(tx => {
        const txDate = new Date(tx.date);
        
        // Find the week this transaction belongs to
        for (const weekKey in weekGroups) {
          const week = weekGroups[weekKey];
          
          if (!isBefore(txDate, week.startDate) && !isAfter(txDate, week.endDate)) {
            if (tx.type === TransactionTypeEnum.INCOME) {
              week.income += tx.amount;
            } else {
              week.expense += tx.amount;
            }
            break;
          }
        }
      });
      
      // Calculate net amount and sort by date
      Object.keys(weekGroups).forEach(key => {
        const group = weekGroups[key];
        group.net = group.income - group.expense;
        periodData.push(group);
      });
    }
    
    // Sort data by start date
    periodData.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    
    // Calculate totals
    const totalIncome = periodData.reduce((sum, point) => sum + point.income, 0);
    const totalExpenses = periodData.reduce((sum, point) => sum + point.expense, 0);
    
    return {
      data: periodData,
      totalIncome,
      totalExpenses,
      period,
    };
  }

  /**
   * Get expense distribution by category
   * 
   * @param userId - Current authenticated user ID
   * @param startDate - Start date for period
   * @param endDate - End date for period
   * @returns Expense categories breakdown
   */
  async getExpenseCategories(userId: string, startDate: Date, endDate: Date) {
    // Get all expense transactions for the period with categories
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId,
        type: TransactionTypeEnum.EXPENSE,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        category: true,
      },
    });
    
    // Calculate total expenses amount
    const totalAmount = transactions.reduce((sum, tx) => sum + tx.amount, 0);
    
    // Group transactions by category
    const categoryMap = new Map<string, CategoryDataPoint>();
    
    transactions.forEach(tx => {
      const { category } = tx;
      
      if (!categoryMap.has(category.id)) {
        categoryMap.set(category.id, {
          id: category.id,
          name: category.name,
          color: category.color,
          icon: category.icon,
          amount: 0,
          count: 0,
        });
      }
      
      const categoryData = categoryMap.get(category.id);
      if (categoryData) {
        categoryData.amount += tx.amount;
        categoryData.count += 1;
      }
    });
    
    // Calculate percentages and sort by amount descending
    const categories = Array.from(categoryMap.values()).map(category => {
      return {
        ...category,
        percentage: totalAmount > 0 ? (category.amount / totalAmount) * 100 : 0,
      };
    }).sort((a, b) => b.amount - a.amount);
    
    return {
      categories,
      totalAmount,
      startDate,
      endDate,
    };
  }

  /**
   * Get savings goals progress
   * 
   * @param userId - Current authenticated user ID
   * @returns Savings goals progress data
   */
  async getSavingsGoalsProgress(userId: string) {
    // Get all savings goals for the user
    const savingsGoals = await this.prisma.savingsGoal.findMany({
      where: {
        userId,
      },
    });
    
    // Calculate progress for each goal
    const goals = savingsGoals.map(goal => {
      const progressPercentage = goal.targetAmount > 0 
        ? (goal.currentAmount / goal.targetAmount) * 100 
        : 0;
        
      const remainingAmount = Math.max(0, goal.targetAmount - goal.currentAmount);
      
      return {
        id: goal.id,
        name: goal.name,
        currentAmount: goal.currentAmount,
        targetAmount: goal.targetAmount,
        progressPercentage,
        remainingAmount,
        targetDate: goal.targetDate,
        completed: goal.completed,
      };
    });
    
    // Calculate totals and averages
    const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
    const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
    const averageProgress = goals.length > 0 
      ? goals.reduce((sum, goal) => sum + goal.progressPercentage, 0) / goals.length 
      : 0;
    
    return {
      goals,
      totalSaved,
      totalTarget,
      averageProgress,
    };
  }

  /**
   * Get monthly trends data
   * 
   * @param userId - Current authenticated user ID
   * @param months - Number of months to include
   * @returns Monthly trends data
   */
  async getMonthlyTrends(userId: string, months: number = 6) {
    const now = new Date();
    const endDate = endOfMonth(now);
    const startDate = startOfMonth(subMonths(now, months - 1));
    
    // Get all transactions for the period
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
    
    // Get plan items for savings data
    const savingsItems = await this.prisma.planItem.findMany({
      where: {
        userId,
        itemType: 'SAVINGS',
      },
    });
    
    // Group by month
    const monthlyData: MonthlyDataPoint[] = [];
    
    // Create month data for the entire range
    let currentDate = new Date(startDate);
    while (!isAfter(currentDate, endDate)) {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);
      const monthLabel = format(monthStart, 'MMM yyyy');
      
      // Filter transactions for this month
      const monthTransactions = transactions.filter(tx => {
        const txDate = new Date(tx.date);
        return !isBefore(txDate, monthStart) && !isAfter(txDate, monthEnd);
      });
      
      // Calculate income and expenses
      const income = monthTransactions
        .filter(tx => tx.type === TransactionTypeEnum.INCOME)
        .reduce((sum, tx) => sum + tx.amount, 0);
        
      const expenses = monthTransactions
        .filter(tx => tx.type === TransactionTypeEnum.EXPENSE)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      // Get savings for this month (using plan items)
      const savings = savingsItems
        .filter(item => {
          const itemDate = new Date(item.createdAt);
          return getYear(itemDate) === getYear(monthStart) && getMonth(itemDate) === getMonth(monthStart);
        })
        .reduce((sum, item) => sum + item.amount, 0);
      
      // Calculate net amount
      const net = income - expenses - savings;
      
      monthlyData.push({
        month: monthLabel,
        income,
        expenses,
        savings,
        net,
        date: monthStart,
      });
      
      currentDate = addMonths(currentDate, 1);
    }
    
    // Calculate averages
    const averageIncome = monthlyData.reduce((sum, month) => sum + month.income, 0) / monthlyData.length;
    const averageExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0) / monthlyData.length;
    const averageSavings = monthlyData.reduce((sum, month) => sum + month.savings, 0) / monthlyData.length;
    
    // Calculate trends (percentage change from first to last month)
    const firstMonth = monthlyData[0];
    const lastMonth = monthlyData[monthlyData.length - 1];
    
    const incomeTrend = firstMonth.income > 0 
      ? ((lastMonth.income - firstMonth.income) / firstMonth.income) * 100 
      : 0;
      
    const expensesTrend = firstMonth.expenses > 0 
      ? ((lastMonth.expenses - firstMonth.expenses) / firstMonth.expenses) * 100 
      : 0;
      
    const savingsTrend = firstMonth.savings > 0 
      ? ((lastMonth.savings - firstMonth.savings) / firstMonth.savings) * 100 
      : 0;
    
    return {
      months: monthlyData,
      averageIncome,
      averageExpenses,
      averageSavings,
      incomeTrend,
      expensesTrend,
      savingsTrend,
    };
  }

  /**
   * Get daily spending trend
   * 
   * @param userId - Current authenticated user ID
   * @param days - Number of days to include
   * @returns Daily spending data
   */
  async getDailySpending(userId: string, days: number = 14) {
    const now = new Date();
    const endDate = endOfDay(now);
    const startDate = startOfDay(subDays(now, days - 1));
    
    // Get all expense transactions for the period
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId,
        type: TransactionTypeEnum.EXPENSE,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });
    
    // Group by day
    const dailyData: DailyDataPoint[] = [];
    
    // Create day data for the entire range
    let currentDate = new Date(startDate);
    while (!isAfter(currentDate, endDate)) {
      const dayStart = startOfDay(currentDate);
      const dayEnd = endOfDay(currentDate);
      const dayLabel = format(dayStart, 'MMM d, yyyy');
      
      // Filter transactions for this day
      const dayTransactions = transactions.filter(tx => {
        const txDate = new Date(tx.date);
        return !isBefore(txDate, dayStart) && !isAfter(txDate, dayEnd);
      });
      
      // Calculate total amount spent this day
      const amount = dayTransactions.reduce((sum, tx) => sum + tx.amount, 0);
      
      dailyData.push({
        day: dayLabel,
        amount,
        transactionCount: dayTransactions.length,
        date: dayStart,
        comparisonToAverage: 0, // Will be calculated after average is computed
      });
      
      currentDate = addDays(currentDate, 1);
    }
    
    // Calculate totals and averages
    const totalAmount = dailyData.reduce((sum, day) => sum + day.amount, 0);
    const averageAmount = totalAmount / dailyData.length;
    
    // Find highest and lowest amounts
    let highestAmount = 0;
    let lowestAmount = Number.MAX_VALUE;
    
    // Update comparison to average and find min/max
    dailyData.forEach(day => {
      day.comparisonToAverage = averageAmount > 0 
        ? ((day.amount - averageAmount) / averageAmount) * 100 
        : 0;
        
      if (day.amount > highestAmount) {
        highestAmount = day.amount;
      }
      
      if (day.amount < lowestAmount && day.amount > 0) {
        lowestAmount = day.amount;
      }
    });
    
    // If no expenses, set lowest to 0
    if (lowestAmount === Number.MAX_VALUE) {
      lowestAmount = 0;
    }
    
    return {
      days: dailyData,
      totalAmount,
      averageAmount,
      highestAmount,
      lowestAmount,
    };
  }

  /**
   * Get budget vs actual comparison
   * 
   * @param userId - Current authenticated user ID
   * @param groupBy - Grouping type (month/category)
   * @returns Budget vs actual comparison data
   */
  async getBudgetActualComparison(userId: string, groupBy: BudgetComparisonTypeEnum) {
    const now = new Date();
    
    if (groupBy === BudgetComparisonTypeEnum.MONTH) {
      // Compare by month for the current year
      const yearStart = new Date(now.getFullYear(), 0, 1);
      const yearEnd = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
      
      // Get all budgets for the year
      const budgets = await this.prisma.budget.findMany({
        where: {
          userId,
          type: 'MONTHLY',
          startDate: {
            gte: yearStart,
          },
          endDate: {
            lte: yearEnd,
          },
        },
        include: {
          categoryAllocations: {
            include: {
              category: true,
            },
          },
        },
      });
      
      // Get all expense transactions for the year
      const transactions = await this.prisma.transaction.findMany({
        where: {
          userId,
          type: TransactionTypeEnum.EXPENSE,
          date: {
            gte: yearStart,
            lte: now, // Only include transactions up to current date
          },
        },
      });
      
      // Group budgets and transactions by month
      const monthlyData: BudgetCategoryDataPoint[] = [];
      
      // Create month data for each month of the year up to current month
      for (let month = 0; month < now.getMonth() + 1; month++) {
        const monthStart = new Date(now.getFullYear(), month, 1);
        const monthEnd = endOfMonth(monthStart);
        const monthLabel = format(monthStart, 'MMMM yyyy');
        
        // Find budget for this month
        const monthBudget = budgets.find(budget => {
          const budgetStart = new Date(budget.startDate);
          return getMonth(budgetStart) === month;
        });
        
        // Calculate budgeted amount
        const budgetAmount = monthBudget ? monthBudget.amount : 0;
        
        // Filter transactions for this month
        const monthTransactions = transactions.filter(tx => {
          const txDate = new Date(tx.date);
          return getMonth(txDate) === month;
        });
        
        // Calculate actual amount spent
        const actualAmount = monthTransactions.reduce((sum, tx) => sum + tx.amount, 0);
        
        // Calculate variance
        const variance = actualAmount - budgetAmount;
        const variancePercentage = budgetAmount > 0 ? (variance / budgetAmount) * 100 : 0;
        
        monthlyData.push({
          label: monthLabel,
          id: null,
          budgetAmount,
          actualAmount,
          variance,
          variancePercentage,
          color: null,
        });
      }
      
      // Calculate totals
      const totalBudget = monthlyData.reduce((sum, month) => sum + month.budgetAmount, 0);
      const totalActual = monthlyData.reduce((sum, month) => sum + month.actualAmount, 0);
      const totalVariance = totalActual - totalBudget;
      const totalVariancePercentage = totalBudget > 0 ? (totalVariance / totalBudget) * 100 : 0;
      
      return {
        items: monthlyData,
        totalBudget,
        totalActual,
        totalVariance,
        totalVariancePercentage,
        groupBy: 'month',
      };
    } else {
      // Compare by category for the current month
      const monthStart = startOfMonth(now);
      const monthEnd = endOfMonth(now);
      
      // Get the current month's budget with categories
      const budget = await this.prisma.budget.findFirst({
        where: {
          userId,
          type: 'MONTHLY',
          startDate: {
            lte: now,
          },
          endDate: {
            gte: now,
          },
        },
        include: {
          categoryAllocations: {
            include: {
              category: true,
            },
          },
        },
      });
      
      // Get all expense transactions for the month
      const transactions = await this.prisma.transaction.findMany({
        where: {
          userId,
          type: TransactionTypeEnum.EXPENSE,
          date: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
        include: {
          category: true,
        },
      });
      
      // Group transactions by category
      const categoryMap = new Map<string, BudgetCategoryDataPoint>();
      
      // Initialize with budget categories
      if (budget) {
        budget.categoryAllocations.forEach(allocation => {
          categoryMap.set(allocation.categoryId, {
            label: allocation.category.name,
            id: allocation.categoryId,
            budgetAmount: allocation.amount,
            actualAmount: 0,
            variance: 0,
            variancePercentage: 0,
            color: allocation.category.color,
          });
        });
      }
      
      // Add transaction amounts to categories
      transactions.forEach(tx => {
        if (!categoryMap.has(tx.categoryId)) {
          // Category not in budget
          categoryMap.set(tx.categoryId, {
            label: tx.category.name,
            id: tx.categoryId,
            budgetAmount: 0,
            actualAmount: 0,
            variance: 0,
            variancePercentage: 0,
            color: tx.category.color,
          });
        }
        
        const categoryData = categoryMap.get(tx.categoryId);
        if (categoryData) {
          categoryData.actualAmount += tx.amount;
        }
      });
      
      // Calculate variances and sort by budget amount descending
      const categoryData = Array.from(categoryMap.values()).map(category => {
        const variance = category.actualAmount - category.budgetAmount;
        const variancePercentage = category.budgetAmount > 0 
          ? (variance / category.budgetAmount) * 100 
          : 0;
          
        return {
          ...category,
          variance,
          variancePercentage,
        };
      }).sort((a, b) => b.budgetAmount - a.budgetAmount);
      
      // Calculate totals
      const totalBudget = categoryData.reduce((sum, category) => sum + category.budgetAmount, 0);
      const totalActual = categoryData.reduce((sum, category) => sum + category.actualAmount, 0);
      const totalVariance = totalActual - totalBudget;
      const totalVariancePercentage = totalBudget > 0 ? (totalVariance / totalBudget) * 100 : 0;
      
      return {
        items: categoryData,
        totalBudget,
        totalActual,
        totalVariance,
        totalVariancePercentage,
        groupBy: 'category',
      };
    }
  }
} 