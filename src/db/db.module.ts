import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {EventModel} from "./models/event.model";
import {TagModel} from "./models/tag.model";
import {UserModel} from "./models/user.model";
import {EventsOrgsModel} from "./relations/events-orgs.model";
import {ImageModel} from "./models/image.model";
import {EventTagsModel} from "./relations/event-tags.model";
import {EventsImgsModel} from "./relations/events-imgs.model";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            autoLoadModels: true,
            models: [
                EventModel,
                UserModel,
                TagModel,
                ImageModel,
                EventsOrgsModel,
                EventTagsModel,
                EventsImgsModel,
            ]
        })
    ]
})
export class DbModule {}