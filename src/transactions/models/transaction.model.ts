import { ApiProperty } from '@nestjs/swagger';
import { TransactionTypeEnum } from '../dto/create-transaction.dto';

class CategoryInfo {
  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Category name',
    example: 'Groceries',
  })
  name: string;

  @ApiProperty({
    description: 'Category icon',
    example: 'shopping-cart',
  })
  icon: string;

  @ApiProperty({
    description: 'Category color',
    example: '#4CAF50',
  })
  color: string;
}

export class TransactionModel {
  @ApiProperty({
    description: 'Transaction ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Transaction amount',
    example: 45.99,
  })
  amount: number;

  @ApiProperty({
    description: 'Transaction type',
    enum: TransactionTypeEnum,
    example: TransactionTypeEnum.EXPENSE,
  })
  type: TransactionTypeEnum;

  @ApiProperty({
    description: 'Transaction date and time',
    example: '2023-05-15T14:30:00Z',
  })
  date: Date;

  @ApiProperty({
    description: 'Transaction description',
    example: 'Weekly grocery shopping',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'Additional notes about the transaction',
    example: 'Bought extra items for weekend party',
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'User ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  userId: string;

  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  categoryId: string;

  @ApiProperty({
    description: 'Associated bill ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
    nullable: true,
  })
  billId: string | null;

  @ApiProperty({
    description: 'Transaction creation date',
    example: '2023-05-15T14:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Transaction last update date',
    example: '2023-05-15T14:30:00Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Category information',
    type: CategoryInfo,
  })
  category: CategoryInfo;
} 