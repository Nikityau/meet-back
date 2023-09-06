import {Body, Controller, Post} from "@nestjs/common";
import {CommentsDto} from "./dto/comments.dto";
import {CommentsService} from "./comments.service";

@Controller('comments')
export class CommentsController {

    constructor(
        private commentsService: CommentsService
    ) {
    }

    @Post('set')
    async setPost(@Body() dto: CommentsDto) {
        return await this.commentsService.setComment(dto)
    }
}