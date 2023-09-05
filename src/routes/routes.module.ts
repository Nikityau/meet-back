import {Module} from "@nestjs/common";
import {EventsModule} from "./events/events.module";
import {TagsModule} from "./tags/tags.module";

@Module({
    imports: [
        EventsModule,
        TagsModule
    ]
})
export class RoutesModule {}