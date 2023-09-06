import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {EventModel} from "./event.model";

interface CommentsModelAttr {
    comment: string
}

@Table({
    tableName: 'comments'
})
export class CommentsModel extends Model<CommentsModel, CommentsModelAttr> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    comment

    @ForeignKey(() => EventModel)
    eventId;

    @BelongsTo(() => EventModel)
    event: Event;
}