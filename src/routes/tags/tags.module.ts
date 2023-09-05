import {Module} from "@nestjs/common";
import {TagsController} from "./tags.controller";
import {TagsService} from "./tags.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {TagModel} from "../../db/models/tag.model";

@Module({
    imports: [
      SequelizeModule.forFeature([
          TagModel
      ])
    ],
    controllers: [
        TagsController,
    ],
    providers: [
        TagsService
    ]
})
export class TagsModule {}