import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { OrganizationsModel } from "./organizations.model";
import { CreateOrgDto } from "./dto/create-org.dto";
import { AddStaffDto } from "./dto/add-staff.dto";
import { UserService } from "../users/user.service";
import { SetStaffRoleDto } from "./dto/set-staff-role.dto";
import { RolesService } from "../roles/roles.service";
import { OrgStaffModel } from "../org-staff/org-staff.model";
import { UserModel } from "../users/user.model";
import { RemoveStaffDto } from "./dto/remove-staff.dto";
import { dbFetchSettings } from "../shared/db-fetch-settings";
import { EventsModel } from "../events/events.model";
import { DeleteOrgDto } from "./dto/delete-org.dto";

@Injectable()
export class OrganizationsService {

  constructor(
    @InjectModel(OrganizationsModel) private orgRep: typeof OrganizationsModel,
    @InjectModel(OrgStaffModel) private orgStaff: typeof OrgStaffModel,
    private userService: UserService,
    private roleService: RolesService,
  ) {
  }

  async create(dto: CreateOrgDto) {
    return await this.orgRep.create(dto)
  }

  async getStaff(orgId: string) {
    return []
  }

  async getOrgById(orgId: string) {
    return await this.orgRep.findByPk(orgId)
  }

  async getAll() {
    const orgs = await this.orgRep.findAll({
      attributes: {
        exclude: dbFetchSettings.attrs.exclude
      },
      include: [
        {
          model: UserModel,
          through:  {
            as: 'organization_role',
            attributes: [
              'id',
              'role'
            ]
          }
        },
        {
          model: EventsModel,
        }
      ]
    })

    return orgs
  }

  async addStaff(dto: AddStaffDto) {
    const org = await this.orgRep.findByPk(dto.orgId)
    const user = await this.userService.getById(dto.userId)

    if(!org || !user) {
      throw new HttpException('org or user not found', HttpStatus.NOT_FOUND)
    }

    const staff = await this.orgStaff.findOne({
      where: {
        orgId: dto.orgId,
        userId: dto.userId,
      }
    })

    if(staff) {
      return {
        status: 'already exist',
        data: staff
      }
    }

    await this.orgStaff.create({
      orgId: org.id,
      userId: user.id,
      role: dto.role
    })

    return dto
  }

  async removeStaff(dto: RemoveStaffDto) {
    const staff = await this.orgStaff.findOne({
      where: {
        orgId: dto.orgId,
        userId: dto.staffId,
      }
    })

    if(!staff) {
      throw new HttpException('staff or organization do not exist', HttpStatus.NOT_FOUND)
    }

    await staff.destroy()

    return dto;
  }

  async setStaffRole(dto: SetStaffRoleDto) {
    const staff = await this.orgStaff.update({
      role: dto.role
    }, {
      where: {
        orgId: dto.orgId,
        userId: dto.userId,
      }
    })

    return dto
  }

  async delete(dto: DeleteOrgDto) {
    const org = await this.orgRep.findByPk(dto.orgId);
    if(!org) {
      throw new HttpException('org not found', HttpStatus.NOT_FOUND)
    }

    await this.orgStaff.destroy({
      where: {
        orgId: org.id
      }
    })
    await org.destroy()

    return dto;
  }
}