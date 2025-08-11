import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsISO8601, IsOptional, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export enum TimePeriodEnum {
  WEEK = 'week',
  MONTH = 'month',
}

export enum BudgetComparisonTypeEnum {
  MONTH = 'month',
  CATEGORY = 'category',
}

export class IncomeExpensesParamsDto {
  @ApiProperty({
    description: 'Time period grouping (week/month)',
    enum: TimePeriodEnum,
    example: TimePeriodEnum.MONTH,
    required: true,
  })
  @IsEnum(TimePeriodEnum)
  period: TimePeriodEnum;

  @ApiProperty({
    description: 'Number of months to include',
    example: 3,
    default: 3,
    required: false,
    minimum: 1,
    maximum: 24,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(24)
  @Transform(({ value }) => parseInt(value, 10))
  months?: number = 3;
}

export class ExpenseCategoriesParamsDto {
  @ApiProperty({
    description: 'Start date for filtering (ISO format)',
    example: '2023-01-01',
    required: true,
  })
  @IsISO8601()
  startDate: string;

  @ApiProperty({
    description: 'End date for filtering (ISO format)',
    example: '2023-12-31',
    required: true,
  })
  @IsISO8601()
  endDate: string;
}

export class MonthlyTrendsParamsDto {
  @ApiProperty({
    description: 'Number of months to include',
    example: 6,
    default: 6,
    required: false,
    minimum: 1,
    maximum: 36,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(36)
  @Transform(({ value }) => parseInt(value, 10))
  months?: number = 6;
}

export class DailySpendingParamsDto {
  @ApiProperty({
    description: 'Number of days to include',
    example: 14,
    default: 14,
    required: false,
    minimum: 1,
    maximum: 90,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(90)
  @Transform(({ value }) => parseInt(value, 10))
  days?: number = 14;
}

export class BudgetActualParamsDto {
  @ApiProperty({
    description: 'Comparison grouping (month/category)',
    enum: BudgetComparisonTypeEnum,
    example: BudgetComparisonTypeEnum.MONTH,
    required: true,
  })
  @IsEnum(BudgetComparisonTypeEnum)
  by: BudgetComparisonTypeEnum;
} 