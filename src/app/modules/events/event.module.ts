import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventModel } from '../../../db/models/event.model';
import { TagModel } from '../../../db/models/tag.model';
import { TagsEventsModel } from '../../../db/models/tags-events.model';

import { EventsController } from './event.controller';

import { EventCreateService } from './services/event-create.service';
import { EventGetService } from './services/event-get.service';

@Module({
  imports: [
    SequelizeModule.forFeature([EventModel, TagModel, TagsEventsModel]),
  ],
  providers: [EventCreateService, EventGetService],
  controllers: [EventsController],
})
export class EventsModule {}
