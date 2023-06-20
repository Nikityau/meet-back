import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel } from './models/user.model';
import { EventModel } from './models/event.model';
import { TagModel } from './models/tag.model';
import { TagsEventsModel } from './models/tags-events.model';
import { OrganizationModel } from './models/organization.model';
import { OrgMemberModel } from './models/org-member.model';
import { MemberRoleModel } from './models/member-role.model';
import { MemberRoleLinksModel } from "./models/member-role-links.model";

const DB = {
  HOST: process.env.DB_HOST,
  PORT: Number(process.env.DB_PORT),
  USERNAME: process.env.POSTGRES_USER,
  PASSWORD: process.env.POSTGRES_PASSWORD,
  DB: process.env.POSTGRES_DB,
};

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: DB.HOST,
      port: DB.PORT,
      username: DB.USERNAME,
      password: DB.PASSWORD,
      database: DB.DB,
      synchronize: true,
      models: [
        UserModel,
        EventModel,
        TagModel,
        TagsEventsModel,
        OrganizationModel,
        OrgMemberModel,
        MemberRoleModel,
        MemberRoleLinksModel,
      ],
    }),
  ],
})
export class DBModule {}
