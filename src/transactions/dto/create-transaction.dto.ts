import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TransactionTypeEnum {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Transaction amount',
    example: 45.99,
    minimum: 0.01,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Transaction type',
    enum: TransactionTypeEnum,
    example: TransactionTypeEnum.EXPENSE,
  })
  @IsEnum(TransactionTypeEnum)
  @IsNotEmpty()
  type: TransactionTypeEnum;

  @ApiProperty({
    description: 'Transaction date and time',
    example: '2023-05-15T14:30:00Z',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: 'Category ID',
    example: 'cl9ebqkxk000098l23xjp7y1z',
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({
    description: 'Transaction description',
    example: 'Weekly grocery shopping',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Additional notes about the transaction',
    example: 'Bought extra items for weekend party',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({
    description: 'Associated bill ID (if this transaction is a bill payment)',
    example: 'cl9ebqkxk000098l23xjp7y1z',
    required: false,
  })
  @IsString()
  @IsOptional()
  billId?: string;
}
