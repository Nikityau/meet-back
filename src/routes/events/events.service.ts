import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {EventModel} from "../../db/models/event.model";
import {UserModel} from "../../db/models/user.model";
import {TagModel} from "../../db/models/tag.model";
import {ImageModel} from "../../db/models/image.model";

@Injectable()
export class EventsService {
    constructor(
        @InjectModel(EventModel)
        private eventModel: typeof EventModel
    ) {
    }


    async getAll() {
        return await this.eventModel.findAll({
            include: [
                {
                    model: UserModel,
                    attributes: {
                        exclude: [
                            'createdAt',
                            'updatedAt'
                        ]
                    },
                    through: {
                        attributes: []
                    }
                },
                {
                    model: TagModel,
                    attributes: {
                        exclude: [
                            'createdAt',
                            'updatedAt'
                        ]
                    },
                    through: {
                        attributes: []
                    }
                },
                {
                    model: ImageModel,
                    attributes: {
                        exclude: [
                            'createdAt',
                            'updatedAt'
                        ]
                    },
                    through: {
                        attributes: []
                    }
                }
            ]
        })
    }

    async getToday() {

    }

    async getSoon() {

    }
}