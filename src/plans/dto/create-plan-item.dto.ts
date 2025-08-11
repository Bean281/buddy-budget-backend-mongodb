import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanItemDto {
  @ApiProperty({
    description: 'Description of the plan item',
    example: 'Monthly salary',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Amount for the plan item',
    example: 3000,
    minimum: 0.01,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Category ID associated with this plan item',
    example: 'cl9ebqkxk000098l23xjp7y1z',
    required: false,
  })
  @IsString()
  @IsOptional()
  categoryId?: string;

  @ApiProperty({
    description: 'Notes or additional information about the plan item',
    example: 'Including annual bonus',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
} 