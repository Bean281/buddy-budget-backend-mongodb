import { Type } from 'class-transformer';
import { IsDate, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PayBillDto {
  @ApiProperty({
    description: 'Payment date',
    example: '2023-05-15T00:00:00Z',
    required: false,
    default: 'Current date will be used if not provided',
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  paymentDate?: Date;

  @ApiProperty({
    description: 'Create a transaction record for this payment',
    example: true,
    default: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  createTransaction?: boolean;
} 