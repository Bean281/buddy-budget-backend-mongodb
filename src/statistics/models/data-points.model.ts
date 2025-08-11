// Define interfaces for the data objects used in the statistics service
export interface PeriodDataPoint {
  label: string;
  income: number;
  expense: number;
  net: number;
  startDate: Date;
  endDate: Date;
}

export interface CategoryDataPoint {
  id: string;
  name: string;
  color: string;
  icon: string;
  amount: number;
  count: number;
  percentage?: number;
}

export interface MonthlyDataPoint {
  month: string;
  income: number;
  expenses: number;
  savings: number;
  net: number;
  date: Date;
}

export interface DailyDataPoint {
  day: string;
  amount: number;
  transactionCount: number;
  date: Date;
  comparisonToAverage: number;
}

export interface BudgetCategoryDataPoint {
  label: string;
  id: string | null;
  budgetAmount: number;
  actualAmount: number;
  variance: number;
  variancePercentage: number;
  color: string | null;
} 