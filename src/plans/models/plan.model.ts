import { ApiProperty } from '@nestjs/swagger';
import { PlanItemModel } from './plan-item.model';

export class PlanModel {
  @ApiProperty({
    description: 'Plan type',
    example: 'monthly',
  })
  type: string;

  @ApiProperty({
    description: 'User ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  userId: string;

  @ApiProperty({
    description: 'Income items',
    type: [PlanItemModel],
  })
  income: PlanItemModel[];

  @ApiProperty({
    description: 'Expense items',
    type: [PlanItemModel],
  })
  expenses: PlanItemModel[];

  @ApiProperty({
    description: 'Savings items',
    type: [PlanItemModel],
  })
  savings: PlanItemModel[];

  @ApiProperty({
    description: 'Total income amount',
    example: 5000,
  })
  incomeTotal: number;

  @ApiProperty({
    description: 'Total expenses amount',
    example: 3500,
  })
  expensesTotal: number;

  @ApiProperty({
    description: 'Total savings amount',
    example: 1500,
  })
  savingsTotal: number;

  @ApiProperty({
    description: 'Net balance (income - expenses - savings)',
    example: 0,
  })
  balance: number;

  @ApiProperty({
    description: 'Last updated date',
    example: '2023-05-15T14:30:00Z',
  })
  updatedAt: Date;
} 