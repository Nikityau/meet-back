import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";

import { UserModel } from "./users/user.model";
import { UserModule } from "./users/user.module";
import { RolesModel } from "./roles/roles.model";
import { UserRolesModel } from "./users/user-roles.model";
import { RolesModule } from "./roles/roles.module";
import { EventsModule } from "./events/events.module";
import { TagsModule } from "./tags/tags.module";
import { TagsModel } from "./tags/tags.model";
import { EventTagsModel } from "./events/event-tags.model";
import { EventsModel } from "./events/events.model";
import { OrganizationsModule } from "./organizations/organizations.module";
import { OrganizationsModel } from "./organizations/organizations.model";
import { OrgStaffModel } from "./org-staff/org-staff.model";
import { UserEventsModel } from "./users/user-events.model";
import { BaseCrudService } from "./shared/base-crud.service";


const AdminModule = import("@adminjs/nestjs");
(async () => {
  const AdminJs = await import('adminjs')
  const seq = await import('@adminjs/sequelize')
  AdminJs.AdminJS.registerAdapter({
    Resource: seq.Resource,
    Database: seq.Database
  })
})()

const DEFAULT_ADMIN = {
  email: "admin@example.com",
  password: "password"
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        UserModel,
        RolesModel,
        UserRolesModel,
        EventsModel,
        EventTagsModel,
        UserEventsModel,
        TagsModel,
        OrganizationsModel,
        OrgStaffModel,
      ],
      autoLoadModels: true
    }),
    AdminModule.then(({ AdminModule }) => AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: "/admin",
        resources: [
          UserModel,
          RolesModel,
          UserRolesModel,
          EventsModel,
          EventTagsModel,
          UserEventsModel,
          TagsModel,
          OrganizationsModel,
          OrgStaffModel,
        ]
      }
    })),
    UserModule,
    RolesModule,
    TagsModule,
    EventsModule,
    OrganizationsModule
  ]
})
export class AppModule {
}