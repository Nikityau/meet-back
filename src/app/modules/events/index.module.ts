import { Module } from "@nestjs/common";

import { EventsController } from "./index.controller";

@Module({
    controllers: [
        EventsController
    ]
})
export class EventsModule { }