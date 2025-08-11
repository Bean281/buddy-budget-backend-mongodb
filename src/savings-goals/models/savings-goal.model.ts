import { ApiProperty } from '@nestjs/swagger';

export class SavingsGoalModel {
  @ApiProperty({
    description: 'Unique identifier',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  id: string;

  @ApiProperty({
    description: 'User ID who owns this goal',
    example: 'cl9ebq7xj000023l29wbg5b2j',
  })
  userId: string;

  @ApiProperty({
    description: 'Name of the savings goal',
    example: 'New Car',
  })
  name: string;

  @ApiProperty({
    description: 'Target amount to save',
    example: 15000,
  })
  targetAmount: number;

  @ApiProperty({
    description: 'Current amount saved',
    example: 3500,
  })
  currentAmount: number;

  @ApiProperty({
    description: 'Target date for goal completion',
    example: '2023-12-31T00:00:00.000Z',
    nullable: true,
  })
  targetDate: Date | null;

  @ApiProperty({
    description: 'Whether the goal has been completed',
    example: false,
  })
  completed: boolean;

  @ApiProperty({
    description: 'Additional notes about this goal',
    example: 'Saving for a new electric car',
    nullable: true,
  })
  notes: string | null;

  @ApiProperty({
    description: 'Date when the goal was created',
    example: '2023-04-15T10:30:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the goal was last updated',
    example: '2023-05-20T14:15:30.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Percentage of progress towards the target amount (0-100)',
    example: 23.33,
  })
  progressPercentage: number;

  @ApiProperty({
    description: 'Number of days remaining until the target date',
    example: 225,
    nullable: true,
  })
  daysRemaining: number | null;
}

export class DeleteGoalResponseModel {
  @ApiProperty({
    description: 'Success message',
    example: 'Goal deleted successfully',
  })
  message: string;
} 