import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {EventModel} from "../../db/models/event.model";
import {CommentsModel} from "../../db/models/comments.model";
import {CommentsDto} from "./dto/comments.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(EventModel)
        private eventModel: typeof EventModel,
        @InjectModel(CommentsModel)
        private commentModel: typeof CommentsModel
    ) {
    }

    async setComment(dto: CommentsDto) {
        const event = await this.eventModel.findByPk(dto.eventId)
        if(!event) return "error"

        const comm = await this.commentModel.create({
            comment: dto.comment
        })

        await event.$add('comments', comm.id)

        return dto
    }
}