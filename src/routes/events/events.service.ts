import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {EventModel} from "../../db/models/event.model";
import {UserModel} from "../../db/models/user.model";
import {TagModel} from "../../db/models/tag.model";
import {ImageModel} from "../../db/models/image.model";
import {CommentsModel} from "../../db/models/comments.model";
import {FindOptions, Op} from "sequelize";
import {FilterDto} from "./dto/filter.dto";


@Injectable()
export class EventsService {

    includeOptions = [
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
        },
        {
            model: CommentsModel,
            attributes: {
                exclude: [
                    'createdAt',
                    'updatedAt'
                ]
            },
        }
    ]
    attrs = {
        exclude: [
            'createdAt',
            'updatedAt'
        ]
    }

    constructor(
        @InjectModel(EventModel)
        private eventModel: typeof EventModel
    ) {
    }

    async getEvents(opt: FindOptions<EventModel>) {
        return await this.eventModel.findAll(opt)
    }

    async getAliveByFilter(filters: FilterDto) {
        if (
            !filters.dates &&
            !filters.tags &&
            !filters.location
        )
            return []

        const byLocation = await this.getEvents({
            include: this.includeOptions,
            attributes: this.attrs,
            where: {
                location: filters.location,
                isArchive: false,
            }
        })

        return byLocation
    }

    async getAll() {
        return await this.getEvents({
            include: this.includeOptions
        })
    }

    async getToday() {
        const date = new Date()

        return await this.getEvents({
            include: this.includeOptions,
            where: {
                [Op.and]: {
                    startDate: {
                        [Op.lte]: date
                    },
                    endDate: {
                        [Op.gte]: date
                    },
                    isArchive: false
                }
            },
            attributes: this.attrs
        })
    }

    async getSoon() {
        const date = new Date()

        return await this.getEvents({
            include: this.includeOptions,
            where: {
                startDate: {
                    [Op.gt]: date
                },
                isArchive: false,
            },
            attributes: this.attrs
        })
    }

    async getArchive() {
        return this.getEvents({
            include: this.includeOptions,
            attributes: this.attrs,
            where: {
                isArchive: true
            }
        })
    }

    async getById(id: string) {
        return await this.eventModel.findByPk(id, {
            include: this.includeOptions,
            attributes: this.attrs
        })
    }

}