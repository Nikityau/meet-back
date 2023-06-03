import { Controller, Get } from "@nestjs/common";


@Controller('events') 
export class EventsController {
    @Get('all')
    getAll() {
        return {
            "base-route": "events",
            "route": "all"
        }
    }
}