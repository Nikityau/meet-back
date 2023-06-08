import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
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
  async getAll(@Query('id', ParseIntPipe) id: number) {
    console.log(id);
    return {
      status: 'ok',
    };
  }
}
