import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post(':id')
  login() {
    return {
      status: 'ok',
    };
  }
}
