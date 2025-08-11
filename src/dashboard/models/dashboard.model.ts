import { ApiProperty } from '@nestjs/swagger';

// Financial Summary models
export class FinancialSummaryModel {
  @ApiProperty({
    description: 'Total income amount',
    example: 5200.00,
  })
  incomeTotal: number;

  @ApiProperty({
    description: 'Total expense amount',
    example: 3750.45,
  })
  expenseTotal: number;

  @ApiProperty({
    description: 'Total savings amount',
    example: 500.00,
  })
  savingsTotal: number;

  @ApiProperty({
    description: 'Remaining amount after expenses and savings',
    example: 949.55,
  })
  remainingAmount: number;

  @ApiProperty({
    description: 'Start date of the period',
    example: '2023-05-01T00:00:00Z',
  })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the period',
    example: '2023-05-31T23:59:59Z',
  })
  endDate: Date;
}

// Today's Spending models
export class TodaySpendingModel {
  @ApiProperty({
    description: 'Total spent today',
    example: 85.75,
  })
  totalSpentToday: number;

  @ApiProperty({
    description: 'Number of transactions today',
    example: 3,
  })
  transactionCount: number;

  @ApiProperty({
    description: 'Daily budget amount',
    example: 100.00,
  })
  dailyBudget: number;

  @ApiProperty({
    description: 'Remaining budget for today',
    example: 14.25,
  })
  remainingBudget: number;

  @ApiProperty({
    description: 'Current date',
    example: '2023-05-15T00:00:00Z',
  })
  date: Date;
}

// Budget Progress models
export class BudgetProgressModel {
  @ApiProperty({
    description: 'Current spending amount',
    example: 1250.75,
  })
  currentSpending: number;

  @ApiProperty({
    description: 'Target budget amount',
    example: 2000.00,
  })
  targetBudget: number;

  @ApiProperty({
    description: 'Percentage of budget used',
    example: 62.5,
  })
  percentageUsed: number;

  @ApiProperty({
    description: 'Remaining budget amount',
    example: 749.25,
  })
  remainingAmount: number;

  @ApiProperty({
    description: 'Budget period type',
    example: 'monthly',
  })
  period: string;

  @ApiProperty({
    description: 'Start date of the period',
    example: '2023-05-01T00:00:00Z',
  })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the period',
    example: '2023-05-31T23:59:59Z',
  })
  endDate: Date;
}

// Category info for expenses
class CategoryInfo {
  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Category name',
    example: 'Groceries',
  })
  name: string;

  @ApiProperty({
    description: 'Category icon',
    example: 'shopping-cart',
  })
  icon: string;

  @ApiProperty({
    description: 'Category color',
    example: '#4CAF50',
  })
  color: string;
}

// Recent expense item
export class ExpenseItem {
  @ApiProperty({
    description: 'Transaction ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Transaction amount',
    example: 45.99,
  })
  amount: number;

  @ApiProperty({
    description: 'Transaction date and time',
    example: '2023-05-15T14:30:00Z',
  })
  date: Date;

  @ApiProperty({
    description: 'Transaction description',
    example: 'Weekly grocery shopping',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'Category information',
    type: CategoryInfo,
  })
  category: CategoryInfo;
}

// Day group for expenses
export class DayGroup {
  @ApiProperty({
    description: 'Date of the group',
    example: '2023-05-15T00:00:00Z',
  })
  date: Date;

  @ApiProperty({
    description: 'Total amount for the day',
    example: 85.75,
  })
  totalAmount: number;

  @ApiProperty({
    description: 'Expenses for the day',
    type: [ExpenseItem],
  })
  expenses: ExpenseItem[];
}

// Recent expenses response
export class RecentExpensesModel {
  @ApiProperty({
    description: 'Expenses grouped by day with daily totals',
  })
  expensesByDay: Record<string, {
    date: Date;
    expenses: any[];
    totalAmount: number;
  }>;

  @ApiProperty({
    description: 'Total number of recent expense transactions',
    example: 15,
  })
  totalCount: number;

  @ApiProperty({
    description: 'Sum of all recent expense amounts',
    example: 847.50,
  })
  totalAmount: number;
}

export class ClearDataResponseModel {
  @ApiProperty({
    description: 'Success message',
    example: 'All user data cleared successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Summary of cleared data counts',
    example: {
      transactions: 45,
      bills: 8,
      savingsGoals: 3,
      planItems: 12,
      budgets: 2,
      userCategories: 5
    },
  })
  clearedData: {
    transactions: number;
    bills: number;
    savingsGoals: number;
    planItems: number;
    budgets: number;
    userCategories: number;
  };

  @ApiProperty({
    description: 'Timestamp when data was cleared',
    example: '2024-12-01T10:30:00.000Z',
  })
  timestamp: Date;
}

export class ClearSingleDataTypeResponseModel {
  @ApiProperty({
    description: 'Success message',
    example: 'All transactions cleared successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Number of items cleared',
    example: 45,
  })
  clearedCount: number;

  @ApiProperty({
    description: 'Type of data that was cleared',
    example: 'transactions',
    enum: ['transactions', 'bills', 'savings_goals'],
  })
  dataType: string;

  @ApiProperty({
    description: 'Timestamp when data was cleared',
    example: '2024-12-01T10:30:00.000Z',
  })
  timestamp: Date;
}
