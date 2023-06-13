import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Param,
  Query,
  Delete,
  Put,
} from '@nestjs/common';

import { EventInputPipe } from './pipe/event-input.pipe';
import { EventInputDTO, eventInputSchema } from './dto/event-input.dto';
import { EventTimePipe } from './pipe/event-time.pipe';
import { EventCreateService } from './services/event-create.service';
import { EventGetService } from './services/event-get.service';

@Controller('events')
export class EventsController {
  constructor(
    private eventCreateService: EventCreateService,
    private eventGetService: EventGetService,
  ) {}

  @Post('create')
  @UsePipes(new EventTimePipe())
  @UsePipes(new EventInputPipe(eventInputSchema))
  async createEvent(@Body() eventInputDTO: EventInputDTO) {
    const event = await this.eventCreateService.createEvent(eventInputDTO);

    return {
      status: 'created',
      data: event,
    };
  }

  @Put('change/:id')
  async changeData() {
    return {
      change: 'ok',
    };
  }

  @Delete('delete/all')
  async deleteAll() {
    return {
      delete: 1,
    };
  }

  @Delete('delete/:id')
  async deleteById() {
    return {
      byId: 1,
    };
  }

  @Get('all')
  async getAll() {
    const events = await this.eventGetService.getAll();

    return {
      data: events,
    };
  }

  @Get('date')
  async getByDate(@Query('date') date: string) {
    const events = await this.eventGetService.getByDate(date);

    return {
      data: events,
    };
  }

  @Get('current')
  async getCurrent() {
    const events = await this.eventGetService.getCurrent();

    return {
      data: events,
    };
  }

  @Get('nearest')
  async getNearest() {
    return {
      nearest: 1,
    };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const event = await this.eventGetService.getById(id);

    return {
      data: event,
    };
  }
}
