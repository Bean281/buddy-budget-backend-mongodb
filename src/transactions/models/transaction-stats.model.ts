import { ApiProperty } from '@nestjs/swagger';

class TransactionSummary {
  @ApiProperty({
    description: 'Total income amount',
    example: 2500.00,
  })
  totalIncome: number;

  @ApiProperty({
    description: 'Total expenses amount',
    example: 1750.45,
  })
  totalExpenses: number;

  @ApiProperty({
    description: 'Balance (income - expenses)',
    example: 749.55,
  })
  balance: number;

  @ApiProperty({
    description: 'Total number of transactions',
    example: 32,
  })
  transactionCount: number;
}

class CategoryBreakdown {
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
    description: 'Total amount for this category',
    example: 245.99,
  })
  amount: number;

  @ApiProperty({
    description: 'Number of transactions in this category',
    example: 5,
  })
  count: number;
}

export class TransactionStatsModel {
  @ApiProperty({
    description: 'Transaction summary statistics',
    type: TransactionSummary,
  })
  summary: TransactionSummary;

  @ApiProperty({
    description: 'Breakdown by category',
    type: [CategoryBreakdown],
  })
  categories: CategoryBreakdown[];
} 