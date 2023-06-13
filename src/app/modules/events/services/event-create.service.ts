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

  async createEvent(eventInputDTO: EventInputDTO) {
    const d = new Date()

    const event = await this.eventModel.create({
      title: 'new',
      description: 'ok',
      place: 'a128',
      startDate: d,
      endDate: d,
    });

    return event;
  }
}
