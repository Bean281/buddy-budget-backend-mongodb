import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSavingsGoalDto {
  @ApiProperty({
    description: 'Name of the savings goal',
    example: 'New Car',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    description: 'Target amount to save',
    example: 15000,
    minimum: 0,
  })
  @IsNumber()
  @IsPositive()
  targetAmount: number;

  @ApiProperty({
    description: 'Current amount already saved (optional)',
    example: 500,
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  currentAmount?: number;

  @ApiProperty({
    description: 'Target date for goal completion (optional)',
    example: '2023-12-31T00:00:00Z',
    required: false,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  targetDate?: Date;

  @ApiProperty({
    description: 'Additional notes about this goal (optional)',
    example: 'Saving for a new electric car',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
} 