import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {CommentsController} from "./comments.controller";
import {CommentsService} from "./comments.service";
import {CommentsModel} from "../../db/models/comments.model";
import {EventModel} from "../../db/models/event.model";

@Module({
    imports: [
      SequelizeModule.forFeature([
          CommentsModel,
          EventModel
      ])
    ],
    controllers: [
        CommentsController
    ],
    providers: [
        CommentsService
    ]
})
export class CommentsModule {}