import {Module} from "@nestjs/common";
import {EventsModule} from "./events/events.module";
import {TagsModule} from "./tags/tags.module";
import {CommentsModule} from "./comments/comments.module";

@Module({
    imports: [
        EventsModule,
        TagsModule,
        CommentsModule
    ]
})
export class RoutesModule {}