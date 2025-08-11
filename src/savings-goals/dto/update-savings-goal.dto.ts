import { IsDate, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSavingsGoalDto {
  @ApiProperty({
    description: 'Updated name of the savings goal',
    example: 'Dream House',
    minLength: 2,
    required: false,
  })
  @IsString()
  @MinLength(2)
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Updated target amount to save',
    example: 20000,
    minimum: 0,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  targetAmount?: number;

  @ApiProperty({
    description: 'Updated target date for goal completion',
    example: '2024-06-30T00:00:00Z',
    required: false,
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  targetDate?: Date;

  @ApiProperty({
    description: 'Updated notes about this goal',
    example: 'Saving for the down payment on my dream house',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
} 