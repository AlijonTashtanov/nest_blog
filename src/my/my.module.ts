import { Module } from '@nestjs/common';
import { MyService } from './my.service';
import { MyController } from './my.controller';
import { AppConfigModule } from '../config/config.module'; // Adjust path as necessary

@Module({
  imports: [AppConfigModule], // Import the configuration module
  providers: [MyService],
  exports: [MyService],

  controllers: [MyController],
})
export class MyModule {}
