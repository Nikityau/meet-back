import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { OrganizationsModel } from "./organizations.model";
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsService } from "./organizations.service";
import { UserModule } from "../users/user.module";

@Module({
  imports: [
    SequelizeModule.forFeature([
      OrganizationsModel
    ]),
    UserModule
  ],
  providers: [
    OrganizationsService
  ],
  controllers: [
    OrganizationsController
  ]
})
export class OrganizationsModule {}
