import { Injectable } from '@nestjs/common';
import { users } from '../moks/index'; // Adjust the import path

@Injectable()
export class UserService {
  getUsers() {
    return users; // Return the users array
  }
}
