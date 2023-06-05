import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventDTO } from './event.dto';
import { Events } from 'src/db/models/event';

@Injectable()
export class EventService {
  private events: EventDTO[] = [];

  constructor(
    @InjectModel(Events)
    private eventModel: typeof Events,
  ) {}

  async create(event: EventDTO) {
    await this.eventModel.create({
      title: 'ok',
    });

    this.events.push(event);
  }

  async getAll() {
    const data = await this.eventModel.findAll();
    console.log('data', data);
    return this.events;
  }
}
