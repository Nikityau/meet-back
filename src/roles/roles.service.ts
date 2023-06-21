import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesModel } from "./roles.model";

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(RolesModel) private roleRep: typeof RolesModel
  ) {
  }

  async createRole(dto: CreateRoleDto) {
    return await this.roleRep.create(dto)
  }


  async getAll() {
    return await this.roleRep.findAll();
  }

  async getRole(role: string) {
    return await this.roleRep.findOne({
      where: {
        role
      }
    })
  }
}