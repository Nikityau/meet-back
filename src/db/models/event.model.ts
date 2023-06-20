import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Table,
} from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { EventDTO } from '../dto/event.dto';
import { TagModel } from './tag.model';
import { TagsEventsModel } from './tags-events.model';


@Table({
  tableName: 'Events',
})
export class EventModel extends BaseModel<EventDTO> {
  @Column({
    type: DataType.CHAR(256),
    allowNull: false,
  })
  title;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description;

  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  place;

  @Column({
    type: 'TIMESTAMP',
    allowNull: false,
  })
  startDate;

  @Column({
    type: 'TIMESTAMP',
    allowNull: false,
  })
  endDate;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isArchive;

  @BelongsToMany(() => TagModel, () => TagsEventsModel)
  tags: TagModel[];
}
