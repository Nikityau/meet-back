import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {EventModel} from "./models/event.model";

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
                EventModel
            ]
        })
    ]
})
export class DbModule {}