import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './index.controller';
import { EventService } from './index.service';
import { EventsModel } from 'src/db/models/event.model';

@Module({
  imports: [SequelizeModule.forFeature([EventsModel])],
  providers: [EventService],
  controllers: [EventsController],
})
export class EventsModule {}
