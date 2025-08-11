import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsPositive, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePlanItemDto } from './create-plan-item.dto';

export class SavePlanDto {
  @ApiProperty({
    description: 'Income items in the plan',
    type: [CreatePlanItemDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePlanItemDto)
  @IsOptional()
  income?: CreatePlanItemDto[];

  @ApiProperty({
    description: 'Expense items in the plan',
    type: [CreatePlanItemDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePlanItemDto)
  @IsOptional()
  expenses?: CreatePlanItemDto[];

  @ApiProperty({
    description: 'Savings items in the plan',
    type: [CreatePlanItemDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePlanItemDto)
  @IsOptional()
  savings?: CreatePlanItemDto[];

  @ApiProperty({
    description: 'Income total amount',
    example: 5000,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  incomeTotal?: number;

  @ApiProperty({
    description: 'Expenses total amount',
    example: 3500,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  expensesTotal?: number;

  @ApiProperty({
    description: 'Savings total amount',
    example: 1500,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  savingsTotal?: number;
} 