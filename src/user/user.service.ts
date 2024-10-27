import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model'; // Import the User model
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getUsers() {
    return this.userModel.findAll(); // Query to get all users
  }

  async getUserById(id: number) {
    return this.userModel.findByPk(id); // Query to get a user by ID
  }
  async createUser(data: { name: string; email: string; password: string }) {
    return this.userModel.create(data); // Create a new user
  }
  async updateUser(
    id: number,
    data: Partial<{ name: string; email: string; password: string }>,
  ) {
    const user = await this.userModel.findByPk(id); // Find the user by ID
    if (!user) {
      throw new Error('User not found');
    }
    return user.update(data); // Update the user with the new data
  }
  async deleteUser(id: number) {
    const user = await this.userModel.findByPk(id); // Find the user by ID
    if (!user) {
      throw new Error('User not found'); // Handle case if user doesn't exist
    }
    await user.destroy(); // Delete the user
    return { message: 'User deleted successfully' }; // Return confirmation
  }
}
