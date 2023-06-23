import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { OrganizationsModel } from "./organizations.model";
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsService } from "./organizations.service";
import { UserModule } from "../users/user.module";
import { RolesModule } from "../roles/roles.module";
import { OrgStaffModel } from "../org-staff/org-staff.model";

@Module({
  imports: [
    SequelizeModule.forFeature([
      OrganizationsModel,
      OrgStaffModel
    ]),
    UserModule,
    RolesModule,
  ],
  providers: [
    OrganizationsService
  ],
  controllers: [
    OrganizationsController
  ],
  exports: [
    OrganizationsService
  ]
})
export class OrganizationsModule {}
