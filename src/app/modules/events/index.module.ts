import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './index.controller';
import { EventService } from './index.service';
import { Events } from 'src/db/models/event';

@Module({
  imports: [SequelizeModule.forFeature([Events])],
  providers: [EventService],
  controllers: [EventsController],
})
export class EventsModule {}
