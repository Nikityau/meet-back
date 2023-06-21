import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { RolesModel } from "./roles.model";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";

@Module({
  imports: [
    SequelizeModule.forFeature([
      RolesModel
    ])
  ],
  controllers: [
    RolesController
  ],
  providers: [
    RolesService,
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {

}