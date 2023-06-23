import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserModel } from "./user.model";
import { SetRoleDto } from "./dto/set-role.dto";
import { RolesService } from "../roles/roles.service";
import { RolesModel } from "../roles/roles.model";
import { EventsModel } from "../events/events.model";
import { OrganizationsModel } from "../organizations/organizations.model";
import { dbFetchSettings } from "../shared/db-fetch-settings";
import { DeleteUserDto } from "./dto/delete-user.dto";

@Injectable()
export class UserService {

  constructor(
    @InjectModel(UserModel) private userRep: typeof UserModel,
    private rolesService: RolesService
  ) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRep.create(dto);

    return user;
  }

  async getAll() {
    return await this.userRep.findAll({
      include: [
        {
          model: OrganizationsModel,
          through: {
            as: "role",
            paranoid: true
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          }
        },
        {
          model: EventsModel
        }
      ],
      attributes: {
        exclude: dbFetchSettings.attrs.exclude
      }
    });
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
            as: "role",
            paranoid: true
          },
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          }
        },
        {
          model: EventsModel
        }
      ],
      attributes: {
        exclude: dbFetchSettings.attrs.exclude
      }
    });
  }

  async setRole(dto: SetRoleDto) {
    const user = await this.userRep.findByPk(dto.userId);

    if (user) {
      await user.set("role", dto.role);

      return dto;
    }


    throw new HttpException("Пользователь не найдены", HttpStatus.NOT_FOUND);
  }

  async deleteUser(dto: DeleteUserDto) {
    const user = await this.userRep.findByPk(dto.userId);
    const role = await user.$get("role");

    await user.$remove("role", role.id);

    return dto;
  }
}