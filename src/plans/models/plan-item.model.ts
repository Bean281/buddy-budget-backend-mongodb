import { ApiProperty } from '@nestjs/swagger';

export class PlanItemModel {
  @ApiProperty({
    description: 'Plan item ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'Description of the plan item',
    example: 'Monthly salary',
  })
  description: string;

  @ApiProperty({
    description: 'Amount for the plan item',
    example: 3000,
  })
  amount: number;

  @ApiProperty({
    description: 'Category ID associated with this plan item',
    example: 'cl9ebqkxk000098l23xjp7y1z',
    nullable: true,
  })
  categoryId: string | null;

  @ApiProperty({
    description: 'User ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  userId: string;

  @ApiProperty({
    description: 'Plan type this item belongs to',
    example: 'monthly',
  })
  planType: string;

  @ApiProperty({
    description: 'Item type (income, expense, savings)',
    example: 'income',
  })
  itemType: string;

  @ApiProperty({
    description: 'Notes or additional information',
    example: 'Including annual bonus',
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'Item creation date',
    example: '2023-05-15T14:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Item last update date',
    example: '2023-05-15T14:30:00Z',
  })
  updatedAt: Date;
} 