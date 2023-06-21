import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./user.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserModel) private userRep: typeof UserModel,
    private rolesService: RolesService
  ) {
  }

  async createUser(dto: CreateUserDto) {
    return await this.userRep.create(dto)
  }

  async getAll() {
    return await this.userRep.findAll({
      include: {
        all: true,
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt',
          ]
        },
      }
    })
  }

  async getById(id: string) {
    return await this.userRep.findByPk(id)
  }

  async addRole(dto: AddRoleDto) {
    const user = await  this.userRep.findByPk(dto.userId)
    const role = await this.rolesService.getRole(dto.role)

    if(user && role) {
      await user.$add('role', role.id);
      return dto;
    }

    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }
}