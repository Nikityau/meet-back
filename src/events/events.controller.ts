import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { EventsService } from "./events.service";
import { AddEventTagDto } from "./dto/add-event-tag.dto";

@Controller('events')
export class EventsController {

  constructor(
    private eventsService: EventsService
  ) {
  }

  @Post('create')
  async create(@Body() dto: CreateEventDto) {
    return await this.eventsService.create(dto)
  }

  @Get('all')
  async getAll() {
    return await this.eventsService.getAll()
  }

  @Post('tag')
  async addTag(@Body() dto: AddEventTagDto) {
    return await this.eventsService.addEventTag(dto)
  }
}