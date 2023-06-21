import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { AddRoleDto } from "./dto/add-role.dto";

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
  }

  @Post('create')
  async create(@Body() dto: CreateUserDto) {
    const user = await this.userService.createUser(dto);

    return user;
  }


  @Get('all')
  async getAll() {
    return await this.userService.getAll()
  }

  @Post('role')
  async addRole(@Body() dto: AddRoleDto) {
    return await this.userService.addRole(dto)
  }
}