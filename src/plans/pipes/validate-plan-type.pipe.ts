import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { PlanTypeEnum } from '../dto/plan-types.enum';

@Injectable()
export class ValidatePlanTypePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      throw new BadRequestException('Plan type is required');
    }

    const type = value.toLowerCase();
    if (!Object.values(PlanTypeEnum).includes(type as PlanTypeEnum)) {
      throw new BadRequestException(
        `Invalid plan type. Must be one of: ${Object.values(PlanTypeEnum).join(', ')}`
      );
    }
    
    return type;
  }
} 