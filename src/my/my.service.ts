import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MyService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    return this.configService.get<string>('PORT');
  }

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL');
  }
}
