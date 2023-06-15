import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

import { EventModel } from '../../../../db/models/event.model';

import { eventSettings } from '../dto/event-input.dto';
import { DbBaseService } from '../../../../services/db-base.service';

@Injectable()
export class EventGetService extends DbBaseService<EventModel> {}
