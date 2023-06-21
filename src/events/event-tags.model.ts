import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { TagsModel } from "../tags/tags.model";
import { EventsModel } from "./events.model";

@Table({
  tableName: 'event_tags'
})
export class EventTagsModel extends Model<EventTagsModel> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;

  @ForeignKey(() => TagsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  tagId;

  @ForeignKey(() => EventsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  eventId;
}