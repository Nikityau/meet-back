import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrganizationsService } from "./organizations.service";
import { CreateOrgDto } from "./dto/create-org.dto";
import { AddStaffDto } from "./dto/add-staff.dto";

@Controller('organizations')
export class OrganizationsController {

  constructor(
    private orgsService: OrganizationsService
  ) {
  }

  @Post('create')
  async create(@Body() dto: CreateOrgDto) {
    return await this.orgsService.create(dto)
  }

  @Get('all')
  async getAll() {
    return await this.orgsService.getAll()
  }

  @Post('staff')
  async addStaff(@Body() dto: AddStaffDto) {
    return await this.orgsService.addStaff(dto)
  }
}