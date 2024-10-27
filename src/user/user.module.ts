import { Module } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as necessary
import { UserController } from './user.controller'; // Adjust the path as necessary
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
