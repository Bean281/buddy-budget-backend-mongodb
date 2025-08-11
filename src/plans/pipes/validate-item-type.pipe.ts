import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { PlanItemTypeEnum } from '../dto/plan-types.enum';

@Injectable()
export class ValidateItemTypePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      throw new BadRequestException('Item type is required');
    }

    const type = value.toLowerCase();
    if (!Object.values(PlanItemTypeEnum).includes(type as PlanItemTypeEnum)) {
      throw new BadRequestException(
        `Invalid item type. Must be one of: ${Object.values(PlanItemTypeEnum).join(', ')}`
      );
    }
    
    return type;
  }
} 