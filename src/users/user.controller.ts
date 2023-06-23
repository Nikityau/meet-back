import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { SetRoleDto } from "./dto/set-role.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { ValidationDataPipe } from "../helpers/pipes/validation-data.pipe";
import { UpdTagDto } from "../tags/dto/upd-tag.dto";
import { ApiResponse } from "@nestjs/swagger";

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'succes',
  })
  @ApiResponse({
    status: 404,
    description: 'error'
  })
  @Post('create')
  async create(@Body() dto: CreateUserDto) {
    const user = await this.userService.createUser(dto);

    return user;
  }

  @Get('all')
  async getAll() {
    return await this.userService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.userService.getById(id)
  }

  @Post('set-role')
  async setRole(@Body() dto: SetRoleDto) {
    return await this.userService.setRole(dto)
  }

  @Put('update')
  async update(@Body() dto: UpdTagDto) {

  }

  @Delete('delete')
  async delete(@Body() dto: DeleteUserDto) {
    return await this.userService.deleteUser(dto)
  }
}