import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventInputDTO } from '../dto/event-input.dto';
import { EventModel } from '../../../../db/models/event.model';
import { TagsEventsModel } from '../../../../db/models/tags-events.model';
import { TagModel } from '../../../../db/models/tag.model';

@Injectable()
export class EventCreateService {
  constructor(
    @InjectModel(EventModel)
    private eventModel: typeof EventModel,
    @InjectModel(TagsEventsModel)
    private tagsEventsModel: typeof TagsEventsModel,
    @InjectModel(TagModel)
    private tagModel: typeof TagModel,
  ) {}

  async generateEventObject(eventInputDTO: EventInputDTO) {
    const event = {
      title: eventInputDTO.title,
      description: eventInputDTO.description,
      place: eventInputDTO.place,
      isArchive: eventInputDTO.isArchive || false,
      startDate: `${eventInputDTO.date.startDate} ${eventInputDTO.date.startTime}:00`,
      endDate: null,
    };

    let endDate = eventInputDTO.date.endDate;
    let endTime = eventInputDTO.date.endTime;

    if (!endDate) {
      endDate = eventInputDTO.date.startDate;
    }
    if (!endTime) {
      endTime = '24:00';
    }

    event.endDate = `${endDate} ${endTime}:00`;

    return event;
  }

  async getTag(tagName: string) {
    const tag = await this.tagModel.findOne({
      where: {
        tag: tagName,
      },
    });

    return tag;
  }

  async createEvent(eventInputDTO: EventInputDTO) {
    const eventData = await this.generateEventObject(eventInputDTO);

    const event = await this.eventModel.create(eventData);

    const tagsId: string[] = [];
    for (let i = 0; i < eventInputDTO.tags.length; ++i) {
      const tag = await this.getTag(eventInputDTO.tags[i]);
      tagsId.push(tag.id);
    }

    for (let i = 0; i < tagsId.length; ++i) {
      await this.tagsEventsModel.create({
        eventId: event.id,
        tagId: tagsId[i],
      });
    }

    return event;
  }
}
