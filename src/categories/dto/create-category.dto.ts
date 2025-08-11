import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum CategoryTypeEnum {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Groceries',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Category type',
    enum: CategoryTypeEnum,
    example: CategoryTypeEnum.EXPENSE,
  })
  @IsEnum(CategoryTypeEnum)
  @IsNotEmpty()
  type: CategoryTypeEnum;

  @ApiProperty({
    description: 'Icon identifier for the category',
    example: 'shopping-cart',
  })
  @IsString()
  @IsNotEmpty()
  icon: string;

  @ApiProperty({
    description: 'Color code in hex format',
    example: '#4CAF50',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    description: 'Optional description of the category',
    example: 'For food and household items',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
