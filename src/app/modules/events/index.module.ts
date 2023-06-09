import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { EventsController } from './index.controller';
import { EventService } from './index.service';

@Module({
  imports: [],
  providers: [EventService],
  controllers: [EventsController],
})
export class EventsModule {}
