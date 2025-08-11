import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateStatusPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return undefined; // Allow undefined (no filter)
    
    // Convert to lowercase for case-insensitive comparison
    const status = value.toLowerCase();
    
    if (status !== 'active' && status !== 'completed') {
      throw new BadRequestException('Status must be either "active" or "completed"');
    }
    
    return status;
  }
} 