import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { OrganizationsModel } from "./organizations.model";
import { CreateOrgDto } from "./dto/create-org.dto";
import { AddStaffDto } from "./dto/add-staff.dto";
import { UserService } from "../users/user.service";

@Injectable()
export class OrganizationsService {

  constructor(
    @InjectModel(OrganizationsModel) private orgRep: typeof OrganizationsModel,
    private userService: UserService
  ) {
  }

  async create(dto: CreateOrgDto) {
    return await this.orgRep.create(dto)
  }

  async getAll() {
    return await this.orgRep.findAll({
      attributes: {
        exclude: [
          'createdAt',
          'updatedAt'
        ]
      },
      include: {
        all: true,
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        }
      }
    })
  }

  async addStaff(dto: AddStaffDto) {
    const user = await this.userService.getById(dto.userId);
    const org = await this.orgRep.findByPk(dto.orgId);

    if(user && org) {
      await org.$add('staff', user.id)
      return dto
    }

    throw new HttpException('org or user not found', HttpStatus.NOT_FOUND)
  }
}