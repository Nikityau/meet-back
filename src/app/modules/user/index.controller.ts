import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create/:id')
  async create() {
    await this.userService.createComment();

    return await {
      status: 'ok',
    };
  }

  @Get('all')
  async getAll() {
    const data = await this.userService.getAllUsers();

    return data;
  }
}
