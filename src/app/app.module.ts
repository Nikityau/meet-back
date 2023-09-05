import {Module} from "@nestjs/common";
import {RoutesModule} from "../routes/routes.module";
import {DbModule} from "../db/db.module";
import {AdminModule} from "../admin/admin.module";


@Module({
    imports: [
        DbModule,
        AdminModule,
        RoutesModule,
    ],
})
export class AppModule {}