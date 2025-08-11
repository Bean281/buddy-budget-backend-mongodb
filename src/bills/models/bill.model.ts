import { ApiProperty } from '@nestjs/swagger';
import { BillFrequencyEnum } from '../dto/create-bill.dto';

export enum BillStatusEnum {
  UPCOMING = 'UPCOMING',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
}

class CategoryInfo {
  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Category name',
    example: 'Utilities',
  })
  name: string;

  @ApiProperty({
    description: 'Category icon',
    example: 'bolt',
  })
  icon: string;

  @ApiProperty({
    description: 'Category color',
    example: '#FF9800',
  })
  color: string;
}

export class BillModel {
  @ApiProperty({
    description: 'Bill ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Bill name',
    example: 'Internet Subscription',
  })
  name: string;

  @ApiProperty({
    description: 'Bill amount',
    example: 49.99,
  })
  amount: number;

  @ApiProperty({
    description: 'Bill due date',
    example: '2023-05-15T00:00:00Z',
  })
  dueDate: Date;

  @ApiProperty({
    description: 'Bill frequency',
    enum: BillFrequencyEnum,
    example: BillFrequencyEnum.MONTHLY,
  })
  frequency: BillFrequencyEnum;

  @ApiProperty({
    description: 'Autopay status',
    example: false,
  })
  autopay: boolean;

  @ApiProperty({
    description: 'Bill notes',
    example: 'Premium plan with unlimited data',
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'Last payment date',
    example: '2023-04-15T00:00:00Z',
    nullable: true,
  })
  lastPaymentDate: Date | null;

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
    description: 'Bill creation date',
    example: '2023-03-15T14:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Bill last update date',
    example: '2023-04-15T14:30:00Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Bill status',
    enum: BillStatusEnum,
    example: BillStatusEnum.UPCOMING,
  })
  status: BillStatusEnum;

  @ApiProperty({
    description: 'Days until due',
    example: 5,
  })
  daysUntilDue: number;

  @ApiProperty({
    description: 'Category information',
    type: CategoryInfo,
  })
  category: CategoryInfo;
} 