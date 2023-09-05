import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {EventModel} from "../models/event.model";
import {TagModel} from "../models/tag.model";

@Table({
    tableName: 'events_tags'
})
export class EventTagsModel extends Model<EventTagsModel> {
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

    @ForeignKey(() => TagModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    tagId;
}