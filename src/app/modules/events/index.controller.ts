import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { EventService } from './index.service';
import { EventDTO } from './event.dto';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventService) {}

  @Post('create')
  async createEvent(@Body() event: EventDTO) {
    console.log(event);
    const a = await this.eventService.create(event);
  }

  @Get('all')
  async getAll() {
    return await this.eventService.getAll();
  }
}
