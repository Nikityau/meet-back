import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './event.controller';
import { EventModel } from '../../../db/models/event.model';
import { EventCreateService } from './services/event-create.service';
import { EventGetService } from './services/event-get.service';

@Module({
  imports: [SequelizeModule.forFeature([EventModel])],
  providers: [EventCreateService, EventGetService],
  controllers: [EventsController],
})
export class EventsModule {}
