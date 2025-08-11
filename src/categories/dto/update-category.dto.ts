import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryTypeEnum } from './create-category.dto';

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Groceries & Supplies',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Category type',
    enum: CategoryTypeEnum,
    example: CategoryTypeEnum.EXPENSE,
    required: false,
  })
  @IsEnum(CategoryTypeEnum)
  @IsOptional()
  type?: CategoryTypeEnum;

  @ApiProperty({
    description: 'Icon identifier for the category',
    example: 'shopping-basket',
    required: false,
  })
  @IsString()
  @IsOptional()
  icon?: string;

  @ApiProperty({
    description: 'Color code in hex format',
    example: '#2E7D32',
    required: false,
  })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({
    description: 'Description of the category',
    example: 'For food and household essentials',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
