import {Module} from "@nestjs/common";
import {EventsController} from "./events.controller";
import {EventsService} from "./events.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {EventModel} from "../../db/models/event.model";
import {ImageModel} from "../../db/models/image.model";
import {TagModel} from "../../db/models/tag.model";
import {UserModel} from "../../db/models/user.model";
import {CommentsModel} from "../../db/models/comments.model";

@Module({
    imports: [
        SequelizeModule.forFeature([
            EventModel,
            ImageModel,
            TagModel,
            UserModel,
            CommentsModel
        ])
    ],
    controllers: [
        EventsController
    ],
    providers: [
        EventsService
    ]
})
export class EventsModule {}