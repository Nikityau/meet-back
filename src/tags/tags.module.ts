import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TagsModel } from "./tags.model";
import { TagsController } from "./tags.controller";
import { TagsService } from "./tags.service";
import { EventsModel } from "../events/events.model";
import { EventTagsModel } from "../events/event-tags.model";
import { BaseCrudService } from "../shared/base-crud.service";

@Module({
  imports: [
    SequelizeModule.forFeature([
      TagsModel,
      EventsModel,
      EventTagsModel
    ])
  ],
  controllers: [
    TagsController
  ],
  providers: [
    TagsService,
    BaseCrudService
  ],
  exports: [
    TagsService
  ]
})
export class TagsModule {

}