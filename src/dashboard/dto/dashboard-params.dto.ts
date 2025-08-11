import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export enum BudgetPeriodEnum {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export class BudgetProgressParamsDto {
  @ApiProperty({
    description: 'Budget period type',
    enum: BudgetPeriodEnum,
    example: BudgetPeriodEnum.MONTHLY,
    required: true,
  })
  @IsEnum(BudgetPeriodEnum)
  period: BudgetPeriodEnum;
}

export class RecentExpensesParamsDto {
  @ApiProperty({
    description: 'Maximum number of expenses to return',
    example: 10,
    default: 10,
    required: false,
    minimum: 1,
    maximum: 50,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  @Transform(({ value }) => parseInt(value, 10))
  limit?: number = 10;
}
