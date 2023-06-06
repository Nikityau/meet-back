import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventDTO } from './event.dto';
import { EventsModel } from 'src/db/models/event.model';

@Injectable()
export class EventService {
  private events: EventDTO[] = [];

  constructor(
    @InjectModel(EventsModel)
    private eventModel: typeof EventsModel,
  ) {}

  async create(event: EventDTO) {
    await this.eventModel.create({});

    this.events.push(event);
  }

  async getAll() {
    const data = await this.eventModel.findAll();
    console.log('data', data);
    return this.events;
  }
}
