import { ApiProperty } from '@nestjs/swagger';

// Data point for income vs expenses chart
export class IncomeExpensePoint {
  @ApiProperty({
    description: 'Time period label (e.g., "Jan 2023" or "Week 1")',
    example: 'Jan 2023',
  })
  label: string;

  @ApiProperty({
    description: 'Income amount for the period',
    example: 5200.00,
  })
  income: number;

  @ApiProperty({
    description: 'Expense amount for the period',
    example: 3750.45,
  })
  expense: number;

  @ApiProperty({
    description: 'Net amount (income - expense)',
    example: 1449.55,
  })
  net: number;

  @ApiProperty({
    description: 'Start date of the period',
    example: '2023-01-01T00:00:00Z',
  })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the period',
    example: '2023-01-31T23:59:59Z',
  })
  endDate: Date;
}

export class IncomeExpensesChartModel {
  @ApiProperty({
    description: 'Array of income vs expenses data points',
    type: [IncomeExpensePoint],
  })
  data: IncomeExpensePoint[];

  @ApiProperty({
    description: 'Total income for the entire period',
    example: 15600.00,
  })
  totalIncome: number;

  @ApiProperty({
    description: 'Total expenses for the entire period',
    example: 11251.35,
  })
  totalExpenses: number;

  @ApiProperty({
    description: 'Time period used for grouping',
    example: 'month',
  })
  period: string;
}

// Category breakdown for expenses
export class ExpenseCategoryBreakdown {
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
    description: 'Category color',
    example: '#4CAF50',
  })
  color: string;

  @ApiProperty({
    description: 'Category icon',
    example: 'shopping-cart',
  })
  icon: string;

  @ApiProperty({
    description: 'Total amount spent in this category',
    example: 425.75,
  })
  amount: number;

  @ApiProperty({
    description: 'Percentage of total expenses',
    example: 15.2,
  })
  percentage: number;

  @ApiProperty({
    description: 'Number of transactions in this category',
    example: 12,
  })
  count: number;
}

export class ExpenseCategoriesModel {
  @ApiProperty({
    description: 'Breakdown of expenses by category',
    type: [ExpenseCategoryBreakdown],
  })
  categories: ExpenseCategoryBreakdown[];

  @ApiProperty({
    description: 'Total amount of all expenses',
    example: 2800.50,
  })
  totalAmount: number;

  @ApiProperty({
    description: 'Start date of the period',
    example: '2023-01-01T00:00:00Z',
  })
  startDate: Date;

  @ApiProperty({
    description: 'End date of the period',
    example: '2023-12-31T23:59:59Z',
  })
  endDate: Date;
}

// Savings goal progress
export class SavingsGoalProgress {
  @ApiProperty({
    description: 'Goal ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Goal name',
    example: 'Vacation Fund',
  })
  name: string;

  @ApiProperty({
    description: 'Current amount saved',
    example: 1500.00,
  })
  currentAmount: number;

  @ApiProperty({
    description: 'Target amount for goal',
    example: 3000.00,
  })
  targetAmount: number;

  @ApiProperty({
    description: 'Progress percentage towards target',
    example: 50.0,
  })
  progressPercentage: number;

  @ApiProperty({
    description: 'Remaining amount to reach target',
    example: 1500.00,
  })
  remainingAmount: number;

  @ApiProperty({
    description: 'Target date for completion',
    example: '2023-12-31T00:00:00Z',
    nullable: true,
  })
  targetDate: Date | null;

  @ApiProperty({
    description: 'Whether the goal has been completed',
    example: false,
  })
  completed: boolean;
}

export class SavingsGoalsModel {
  @ApiProperty({
    description: 'Array of savings goals with progress data',
    type: [SavingsGoalProgress],
  })
  goals: SavingsGoalProgress[];

  @ApiProperty({
    description: 'Total current amount saved across all goals',
    example: 3750.00,
  })
  totalSaved: number;

  @ApiProperty({
    description: 'Total target amount across all goals',
    example: 8000.00,
  })
  totalTarget: number;

  @ApiProperty({
    description: 'Average progress percentage across all goals',
    example: 46.9,
  })
  averageProgress: number;
}

// Monthly trend data
export class MonthlyTrendPoint {
  @ApiProperty({
    description: 'Month label',
    example: 'Jan 2023',
  })
  month: string;

  @ApiProperty({
    description: 'Total income for the month',
    example: 5200.00,
  })
  income: number;

  @ApiProperty({
    description: 'Total expenses for the month',
    example: 3750.45,
  })
  expenses: number;

  @ApiProperty({
    description: 'Total savings for the month',
    example: 1000.00,
  })
  savings: number;

  @ApiProperty({
    description: 'Net amount (income - expenses - savings)',
    example: 449.55,
  })
  net: number;

  @ApiProperty({
    description: 'Month as date object',
    example: '2023-01-01T00:00:00Z',
  })
  date: Date;
}

export class MonthlyTrendsModel {
  @ApiProperty({
    description: 'Array of monthly trend data points',
    type: [MonthlyTrendPoint],
  })
  months: MonthlyTrendPoint[];

  @ApiProperty({
    description: 'Average monthly income',
    example: 5100.50,
  })
  averageIncome: number;

  @ApiProperty({
    description: 'Average monthly expenses',
    example: 3800.25,
  })
  averageExpenses: number;

  @ApiProperty({
    description: 'Average monthly savings',
    example: 950.75,
  })
  averageSavings: number;

  @ApiProperty({
    description: 'Trend analysis of income (positive or negative percentage)',
    example: 2.5,
  })
  incomeTrend: number;

  @ApiProperty({
    description: 'Trend analysis of expenses (positive or negative percentage)',
    example: -1.2,
  })
  expensesTrend: number;

  @ApiProperty({
    description: 'Trend analysis of savings (positive or negative percentage)',
    example: 5.7,
  })
  savingsTrend: number;
}

// Daily spending data
export class DailySpendingPoint {
  @ApiProperty({
    description: 'Date label',
    example: 'May 15, 2023',
  })
  day: string;

  @ApiProperty({
    description: 'Total amount spent on this day',
    example: 85.75,
  })
  amount: number;

  @ApiProperty({
    description: 'Number of transactions on this day',
    example: 3,
  })
  transactionCount: number;

  @ApiProperty({
    description: 'Date object',
    example: '2023-05-15T00:00:00Z',
  })
  date: Date;

  @ApiProperty({
    description: 'Comparison to average daily spending (percentage above/below)',
    example: -5.2,
  })
  comparisonToAverage: number;
}

export class DailySpendingModel {
  @ApiProperty({
    description: 'Array of daily spending data points',
    type: [DailySpendingPoint],
  })
  days: DailySpendingPoint[];

  @ApiProperty({
    description: 'Total amount spent across all days',
    example: 1200.50,
  })
  totalAmount: number;

  @ApiProperty({
    description: 'Average daily spending amount',
    example: 85.75,
  })
  averageAmount: number;

  @ApiProperty({
    description: 'Highest daily spending amount',
    example: 155.25,
  })
  highestAmount: number;

  @ApiProperty({
    description: 'Lowest daily spending amount',
    example: 12.50,
  })
  lowestAmount: number;
}

// Budget vs Actual data
export class BudgetActualItem {
  @ApiProperty({
    description: 'Item label (month name or category name)',
    example: 'Groceries',
  })
  label: string;

  @ApiProperty({
    description: 'ID (category ID if grouped by category)',
    example: 'cl9ebqkxk000098l23xjp7y1z',
    nullable: true,
  })
  id: string | null;

  @ApiProperty({
    description: 'Budgeted amount',
    example: 400.00,
  })
  budgetAmount: number;

  @ApiProperty({
    description: 'Actual amount spent',
    example: 425.75,
  })
  actualAmount: number;

  @ApiProperty({
    description: 'Variance amount (actual - budget)',
    example: 25.75,
  })
  variance: number;

  @ApiProperty({
    description: 'Variance percentage',
    example: 6.4,
  })
  variancePercentage: number;

  @ApiProperty({
    description: 'Color for category (if grouped by category)',
    example: '#4CAF50',
    nullable: true,
  })
  color: string | null;
}

export class BudgetActualModel {
  @ApiProperty({
    description: 'Array of budget vs actual comparison items',
    type: [BudgetActualItem],
  })
  items: BudgetActualItem[];

  @ApiProperty({
    description: 'Total budgeted amount',
    example: 2800.00,
  })
  totalBudget: number;

  @ApiProperty({
    description: 'Total actual amount spent',
    example: 2950.45,
  })
  totalActual: number;

  @ApiProperty({
    description: 'Total variance amount',
    example: 150.45,
  })
  totalVariance: number;

  @ApiProperty({
    description: 'Total variance percentage',
    example: 5.4,
  })
  totalVariancePercentage: number;

  @ApiProperty({
    description: 'Grouping type used (month or category)',
    example: 'category',
  })
  groupBy: string;
} 