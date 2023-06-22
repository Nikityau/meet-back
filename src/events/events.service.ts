import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { TagsService } from "../tags/tags.service";
import { EventsModel } from "./events.model";
import { CreateEventDto } from "./dto/create-event.dto";
import { AddEventTagDto } from "./dto/add-event-tag.dto";
import { UserEventsModel } from "../users/user-events.model";
import { UserModel } from "../users/user.model";
import { dbFetchSettings } from "../shared/db-fetch-settings";
import { TagsModel } from "../tags/tags.model";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventsModel) private eventRep: typeof EventsModel,
    @InjectModel(UserEventsModel) private userEvRep: typeof UserEventsModel,
    private tagsService: TagsService
  ) {
  }

  async create(dto: CreateEventDto) {
    const event = await this.eventRep.create(dto);

    await this.userEvRep.create({
      eventId: event.id,
      orgId: dto.orgId,
      userId: dto.userId
    });

    return event;
  }

  async addEventTag(dto: AddEventTagDto) {
    const event = await this.eventRep.findByPk(dto.eventId);
    const tag = await this.tagsService.getTag(dto.tag);

    if (tag && event) {
      await event.$add("tag", tag.id);
      return dto;
    }

    throw new HttpException("Событие или тэг не найден", HttpStatus.NOT_FOUND);
  }

  async getAll() {
    return await this.eventRep.findAll({
      include: [
        {
          model: TagsModel,
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          },
          through: {
            attributes: []
          }
        },
        {
          model: UserModel,
          attributes: {
            exclude: dbFetchSettings.attrs.exclude
          },
          through: {
            as: "organization",
            attributes: [
              "orgId"
            ]
          }
        }
      ]
    });
  }
}

