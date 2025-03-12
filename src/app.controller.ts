import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('health')
  checkHealth(): { status: string; timestamp: string } {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
    }
  }
}
