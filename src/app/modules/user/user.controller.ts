import { Body, Controller, Post, UsePipes, Get } from '@nestjs/common';

import { UserService } from './user.service';
import { UserCreateValidationPipe } from './pipes/user-create.pipe';
import { UserInputDTO, userInputSchema } from './dto/user-input.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('reg')
  @UsePipes(new UserCreateValidationPipe(userInputSchema))
  async createUser(@Body() userInputData: UserInputDTO) {
    const user = await this.userService.createUser(userInputData);

    return user;
  }

  @Get('all')
  async getAll() {
    const users = await this.userService.getAll();

    return {
      data: users,
    };
  }
}
