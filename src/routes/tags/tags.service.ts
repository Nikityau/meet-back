import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {TagModel} from "../../db/models/tag.model";

@Injectable()
export class TagsService {
    constructor(
        @InjectModel(TagModel)
        private tagModel: typeof TagModel
    ) {
    }

    async getAll() {
        return this.tagModel.findAll({
            attributes: {
                exclude: [
                    'createdAt',
                    'updatedAt'
                ]
            }
        })
    }
}