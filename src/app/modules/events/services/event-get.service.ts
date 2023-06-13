import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { EventModel } from '../../../../db/models/event.model';

import { eventSettings } from '../dto/event-input.dto';
import { Op } from 'sequelize';

@Injectable()
export class EventGetService {
  constructor(
    @InjectModel(EventModel)
    private eventModel: typeof EventModel,
  ) {}

  async getById(id: string) {
    const event = await this.eventModel.findOne({
      where: {
        id: id,
      },
      attributes: eventSettings.attributes,
    });

    return event;
  }

  async getByDate(date) {
    const dateObj = new Date(date);

    console.log('month', dateObj.getMonth());
    console.log('day', dateObj.getDate());

    const events = await this.eventModel.findAll({
      attributes: eventSettings.attributes,
      where: {
        startDate: {
          [Op.gte]: date,
        },
        endDate: {
          [Op.lte]: dateObj,
        },
      },
    });

    console.log(events);

    return events;
  }
  async getCurrent() {
    const currDate = new Date();

    const event = await this.eventModel.findAll({
      attributes: {
        exclude: eventSettings.attributes.exclude,
      },
      where: {
        startDate: {
          [Op.gte]: currDate,
        },
        endDate: {
          [Op.lte]: currDate,
        },
      },
    });

    return event
  }

  async getAll() {
    const events = await this.eventModel.findAll({
      attributes: eventSettings.attributes,
    });

    return events;
  }
}
