import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TagsModel } from "../tags/tags.model";
import { TagsModule } from "../tags/tags.module";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { EventsModel } from "./events.model";
import { UserEventsModel } from "../users/user-events.model";
import { UserModule } from "../users/user.module";
import { OrganizationsModule } from "../organizations/organizations.module";

@Module({
  imports: [
    SequelizeModule.forFeature([
      TagsModel,
      EventsModel,
      UserEventsModel,
    ]),
    TagsModule,
    UserModule,
    OrganizationsModule
  ],
  providers: [
    EventsService
  ],
  controllers: [
    EventsController
  ]
})
export class EventsModule {}