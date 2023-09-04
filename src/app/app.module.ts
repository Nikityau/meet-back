import {Module} from "@nestjs/common";
import {RoutesModule} from "../routes/routes.module";
import {DbModule} from "../db/db.module";

@Module({
    imports: [
        DbModule,
        RoutesModule
    ]
})
export class AppModule {}