import { Controller, Get } from '@nestjs/common';
import { MyService } from './my.service';

@Controller('my')
export class MyController {
  constructor(private myService: MyService) {}

  @Get('port')
  getPort(): string {
    return this.myService.getPort();
  }

  @Get('database-url')
  getDatabaseUrl(): string {
    return this.myService.getDatabaseUrl();
  }
}
