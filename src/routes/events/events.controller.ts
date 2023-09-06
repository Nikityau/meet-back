import {Body, Controller, Get, Param} from "@nestjs/common";
import {EventsService} from "./events.service";
import {FilterDto} from "./dto/filter.dto";

@Controller('events')
export class EventsController {
    constructor(
        private eventService: EventsService
    ) {}


    @Get('')
    async getAll() {
        return await this.eventService.getAll()
    }

    @Get('/alive')
    async getAlive(@Body() filters: FilterDto) {
        return await this.eventService.getAliveByFilter(filters)
    }

    @Get('/today')
    async getToday() {
        return await this.eventService.getToday()
    }

    @Get('/soon')
    async getSoon() {
        return await this.eventService.getSoon()
    }


    @Get('/archive')
    async getArchive() {
        return await this.eventService.getArchive()
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        return await this.eventService.getById(id)
    }
}