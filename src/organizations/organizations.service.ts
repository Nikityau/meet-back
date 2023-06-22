import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { OrganizationsModel } from "./organizations.model";
import { CreateOrgDto } from "./dto/create-org.dto";
import { AddStaffDto } from "./dto/add-staff.dto";
import { UserService } from "../users/user.service";
import { AddStaffRoleDto } from "./dto/add-staff-role.dto";
import { RolesService } from "../roles/roles.service";
import { OrgStaffModel } from "../org-staff/org-staff.model";
import { UserModel } from "../users/user.model";
import { OrgStaffRolesModel } from "../org-staff/org-staff-roles.model";
import { RolesModel } from "../roles/roles.model";

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


  async getFullOrgData(orgId: string) {
    return {

    }
  }

  async getOrgById(orgId: string) {
    return await this.orgRep.findByPk(orgId)
  }

  async getAll() {
    const orgs = await this.orgRep.findAll({
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
        }
      ]
    })

    return orgs
  }

  async addStaff(dto: AddStaffDto) {
    const org = await this.orgRep.findByPk(dto.orgId)
    const user = await this.userService.getById(dto.userId)

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

    const inst = await this.orgStaff.create({
      orgId: org.id,
      userId: user.id,
      role: 'admin'
    })

    return dto
  }


  async setStaffRole(dto: AddStaffRoleDto) {
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
}