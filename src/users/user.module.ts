import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserModel } from "./user.model";
import { RolesModel } from "../roles/roles.model";
import { UserRolesModel } from "./user-roles.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { RolesModule } from "../roles/roles.module";
import { UserEventsModel } from "./user-events.model";
import { OrganizationsModule } from "../organizations/organizations.module";

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      RolesModel,
      UserRolesModel,
      UserEventsModel
    ]),
    RolesModule,
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
  exports: [
    UserService
  ]
})
export class UserModule {}