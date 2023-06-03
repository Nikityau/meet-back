import { Module } from "@nestjs/common";

import { EventsModule } from "./modules/events/index.module";
import { UserModule } from "./modules/user/index.module";

@Module({
    imports: [
        EventsModule,
        UserModule
    ],
})
export class AppModule {}