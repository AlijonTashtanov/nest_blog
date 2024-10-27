import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the path as necessary
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
// import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
  @Post()
  async createUser(@Body(new ValidationPipe()) body: CreateUserDto) {
    return this.userService.createUser(body);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body(new ValidationPipe({ skipMissingProperties: true }))
    body: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
