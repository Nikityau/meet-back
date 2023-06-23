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
import { UserService } from "../users/user.service";
import { OrganizationsService } from "../organizations/organizations.service";

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(EventsModel) private eventRep: typeof EventsModel,
    @InjectModel(UserEventsModel) private userEvRep: typeof UserEventsModel,
    @InjectModel(TagsModel) private tagRep: typeof TagsModel,
    private tagsService: TagsService,
    private userService: UserService,
    private orgService: OrganizationsService
  ) {
  }

  async create(dto: CreateEventDto) {
    const sD = new Date(dto.startDate)
    const eD = new Date(dto.endDate)

    const user = await this.userService.getById(dto.userId)
    const org = await this.orgService.getOrgById(dto.orgId)

    if(!user || !org) {
      throw new HttpException('org or user not found', HttpStatus.NOT_FOUND)
    }

    const event = await this.eventRep.create({
      ...dto,
      slug: `${dto.title}-${dto.location}-${sD}-${eD}`
    });

    const tags = new Array<TagsModel>;
    for(let i = 0; i < dto.tags.length; ++i) {
      tags.push(await this.tagsService.getTag(dto.tags[i]))
    }

    for(let t of tags) {
      await event.$add('tag', t.id)
    }

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

  async removeEventTag(dto: AddEventTagDto) {
    const event = await this.eventRep.findByPk(dto.eventId)
    const tag = await this.tagsService.getTag(dto.tag)

    if(event && tag) {
      await event.$remove('tag', tag.id)

      return dto

    }

    throw new HttpException('event or rag not found', HttpStatus.NOT_FOUND)
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

