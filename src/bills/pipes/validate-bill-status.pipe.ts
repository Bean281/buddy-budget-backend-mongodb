import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { BillStatusEnum } from '../models/bill.model';

@Injectable()
export class ValidateBillStatusPipe implements PipeTransform {
  transform(value: any): string | undefined {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }

    if (!Object.values(BillStatusEnum).includes(value as BillStatusEnum)) {
      throw new BadRequestException(
        `Invalid status. Must be one of: ${Object.values(BillStatusEnum).join(', ')}`
      );
    }
    
    return value;
  }
} 