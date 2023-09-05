import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {EventModel} from "../models/event.model";
import {ImageModel} from "../models/image.model";

@Table({
    tableName: 'events_imgs'
})
export class EventsImgsModel extends Model<EventsImgsModel> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    declare id;

    @ForeignKey(() => EventModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    eventId;

    @ForeignKey(() => ImageModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    imgId;
}