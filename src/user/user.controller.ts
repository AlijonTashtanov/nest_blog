import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as necessary

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
