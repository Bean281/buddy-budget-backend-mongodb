import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddFundsDto {
  @ApiProperty({
    description: 'Amount to add to the savings goal',
    example: 500,
    minimum: 0.01,
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount: number;
} 