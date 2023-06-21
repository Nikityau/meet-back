import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";

@Controller('roles')
export class RolesController {

  constructor(
    private roleService: RolesService
  ) {
  }

  @Post('create')
  async create(@Body() dto: CreateRoleDto) {
    return await this.roleService.createRole(dto);
  }

  @Get('all')
  async getAll() {
    return await this.roleService.getAll();
  }
}
