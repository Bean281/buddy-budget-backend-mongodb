import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CategoryTypeEnum } from '../dto/create-category.dto';

@Injectable()
export class ValidateCategoryTypePipe implements PipeTransform {
  transform(value: any) {
    if (!value) return undefined; // Allow undefined (no filter)
    
    // Convert to uppercase for case-insensitive comparison
    const type = value.toUpperCase();
    
    if (!Object.values(CategoryTypeEnum).includes(type as CategoryTypeEnum)) {
      throw new BadRequestException(`Type must be one of: ${Object.values(CategoryTypeEnum).join(', ')}`);
    }
    
    return type as CategoryTypeEnum;
  }
} 