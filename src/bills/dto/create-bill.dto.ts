import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum BillFrequencyEnum {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  BIANNUALLY = 'BIANNUALLY',
  ANNUALLY = 'ANNUALLY',
}

export class CreateBillDto {
  @ApiProperty({
    description: 'Bill name',
    example: 'Internet Subscription',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Bill amount',
    example: 49.99,
    minimum: 0.01,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Bill due date',
    example: '2023-05-15T00:00:00Z',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dueDate: Date;

  @ApiProperty({
    description: 'Bill frequency',
    enum: BillFrequencyEnum,
    example: BillFrequencyEnum.MONTHLY,
  })
  @IsEnum(BillFrequencyEnum)
  @IsNotEmpty()
  frequency: BillFrequencyEnum;

  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({
    description: 'Autopay status',
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  autopay?: boolean;

  @ApiProperty({
    description: 'Additional notes about the bill',
    example: 'Premium plan with unlimited data',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
}
