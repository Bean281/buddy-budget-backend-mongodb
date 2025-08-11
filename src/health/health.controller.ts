import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Budget Buddy Backend',
      version: '1.0.0'
    };
  }

  @Get('health')
  health() {
    return {
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    };
  }
}
