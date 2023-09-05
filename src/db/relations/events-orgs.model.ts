import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {EventModel} from "../models/event.model";
import {UserModel} from "../models/user.model";

@Table({
    tableName: 'events_orgs'
})
export class EventsOrgsModel extends Model<EventsOrgsModel> {
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

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    userId;
}