import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./user.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { RolesService } from "../roles/roles.service";
import { RolesModel } from "../roles/roles.model";
import { EventsModel } from "../events/events.model";
import { OrganizationsModel } from "../organizations/organizations.model";
import { dbFetchSettings } from "../shared/db-fetch-settings";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserModel) private userRep: typeof UserModel,
    private rolesService: RolesService
  ) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRep.create(dto)
    const role = await this.rolesService.getRole('user')

    await user.$set('role', role.id)

    return user;
  }

  async getAll() {
    return await this.userRep.findAll({
      include: [
        {
          model: RolesModel,
          through: {
            attributes: []
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          }
        },
        {
          model: OrganizationsModel,
          through: {
            as: 'role',
            paranoid: true
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          },
        },
        {
          model: EventsModel,
        }
      ],
      attributes: {
        exclude: dbFetchSettings.attrs.exclude
      }
    })
  }

  async getById(id: string) {
    return await this.userRep.findByPk(id, {
      include: [
        {
          model: RolesModel,
          through: {
            attributes: []
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          }
        },
        {
          model: OrganizationsModel,
          through: {
            as: 'role',
            paranoid: true
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          },
        },
        {
          model: EventsModel,
        }
      ],
      attributes: {
        exclude: dbFetchSettings.attrs.exclude
      }
    })
  }

  async setRole(dto: AddRoleDto) {
    const user = await  this.userRep.findByPk(dto.userId)
    const role = await this.rolesService.getRole(dto.role)

    if(user && role) {
      await user.$set('role', role.id);
      return dto;
    }

    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }
}