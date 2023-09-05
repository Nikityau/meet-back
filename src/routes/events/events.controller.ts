import {Controller, Get} from "@nestjs/common";
import {EventsService} from "./events.service";

@Controller('events')
export class EventsController {
    constructor(
        private eventService: EventsService
    ) {
    }


    @Get('')
    async getAll() {
        return await this.eventService.getAll()
    }
}