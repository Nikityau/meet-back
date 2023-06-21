import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { EventsModel } from "../events/events.model";
import { EventTagsModel } from "../events/event-tags.model";

interface TagCreationAttrs {
  tag: string;
}

@Table({
  tableName: 'tags',
  updatedAt: false,
})
export class TagsModel extends Model<TagsModel, TagCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  tag;

  @BelongsToMany(() => EventsModel, () => EventTagsModel)
  events: EventsModel[];
}