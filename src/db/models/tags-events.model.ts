import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { EventModel } from './event.model';
import { TagModel } from './tag.model';

@Table({
  tableName: 'TagsEvents',
})
export class TagsEventsModel extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id;

  @ForeignKey(() => EventModel)
  @Column({
    type: DataType.UUID,
  })
  eventId;

  @ForeignKey(() => TagModel)
  @Column({
    type: DataType.UUID,
  })
  tagId;
}
