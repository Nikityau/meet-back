import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventDTO } from './event.dto';

@Injectable()
export class EventService {
  private events: EventDTO[] = [];


  async create(event: EventDTO) {
   

    this.events.push(event);
  }

  async getAll() {
  
    return this.events;
  }
}
