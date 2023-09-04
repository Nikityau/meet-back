import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {EventModel} from "../../db/models/event.model";

@Injectable()
export class EventsService {
    /*constructor(
        @InjectModel(EventModel)
        private eventModel: typeof EventModel
    ) {
    }*/
}