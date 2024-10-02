import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as necessary
import { UserController } from './user.controller'; // Adjust the path as necessary

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
