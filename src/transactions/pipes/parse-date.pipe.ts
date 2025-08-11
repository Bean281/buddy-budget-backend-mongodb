import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any): Date | undefined {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }

    try {
      const date = new Date(value);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
      }
      
      return date;
    } catch (error) {
      throw new BadRequestException('Invalid date format. Please use ISO format (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ)');
    }
  }
} 