import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventInputDTO } from '../dto/event-input.dto';
import { EventModel } from '../../../../db/models/event.model';

@Injectable()
export class EventCreateService {
  constructor(
    @InjectModel(EventModel)
    private eventModel: typeof EventModel,
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

  async createEvent(eventInputDTO: EventInputDTO) {
    const eventData = await this.generateEventObject(eventInputDTO);
    console.log(eventData);

    const event = await this.eventModel.create(eventData);

    return event;
  }
}
