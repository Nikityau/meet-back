import { BelongsToMany, Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { TagDTO } from '../dto/tag.dto';
import { EventModel } from './event.model';
import { TagsEventsModel } from './tags-events.model';

@Table({
  tableName: 'Tags',
})
export class TagModel extends BaseModel<TagDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  tag;

  @BelongsToMany(() => EventModel, () => TagsEventsModel)
  events: EventModel[];
}
