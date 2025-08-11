import { ApiProperty } from '@nestjs/swagger';
import { CategoryTypeEnum } from '../dto/create-category.dto';

export class CategoryModel {
  @ApiProperty({
    description: 'Unique identifier',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'User ID who owns this category',
    example: 'cl9ebq7xj000023l29wbg5b2j',
  })
  userId: string;

  @ApiProperty({
    description: 'Category name',
    example: 'Groceries',
  })
  name: string;

  @ApiProperty({
    description: 'Category type',
    enum: CategoryTypeEnum,
    example: 'EXPENSE',
  })
  type: CategoryTypeEnum;

  @ApiProperty({
    description: 'Icon identifier for the category',
    example: 'shopping-cart',
  })
  icon: string;

  @ApiProperty({
    description: 'Color code in hex format',
    example: '#4CAF50',
  })
  color: string;

  @ApiProperty({
    description: 'Whether this is a default system category',
    example: false,
  })
  isDefault: boolean;

  @ApiProperty({
    description: 'Description of the category',
    example: 'For food and household items',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'Date when the category was created',
    example: '2023-04-15T10:30:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the category was last updated',
    example: '2023-05-20T14:15:30.000Z',
  })
  updatedAt: Date;
}

export class DeleteCategoryResponseModel {
  @ApiProperty({
    description: 'Success message',
    example: 'Category deleted successfully',
  })
  message: string;
} 