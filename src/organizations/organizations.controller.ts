import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrganizationsService } from "./organizations.service";
import { CreateOrgDto } from "./dto/create-org.dto";
import { AddStaffDto } from "./dto/add-staff.dto";
import { SetStaffRoleDto } from "./dto/set-staff-role.dto";
import { RemoveStaffDto } from "./dto/remove-staff.dto";
import { DeleteOrgDto } from "./dto/delete-org.dto";

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

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.orgsService.getOrgById(id)
  }

  @Get(':orgId/staff')
  async getStaff(@Param('orgId') orgId: string) {
    return await this.orgsService.getStaff(orgId)
  }

  @Post('staff')
  async addStaff(@Body() dto: AddStaffDto) {
    return await this.orgsService.addStaff(dto)
  }

  @Delete('staff')
  async removeStaff(@Body() dto: RemoveStaffDto) {
    await this.orgsService.removeStaff(dto);
  }

  @Post('staff/role')
  async addStaffRole(@Body() dto: SetStaffRoleDto) {
    return await this.orgsService.setStaffRole(dto);
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteOrgDto) {
    return await this.orgsService.delete(dto)
  }

}