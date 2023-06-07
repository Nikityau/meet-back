import { Column, Table, DataType, BelongsTo } from 'sequelize-typescript';

import { TagDTO } from '../dto/tag.dto';

import { BaseModel } from './base.model';
import { EventsModel } from './event.model';

@Table({
  tableName: 'Tags',
})
export class TagModel extends BaseModel<TagDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tag;

  @BelongsTo(() => EventsModel, 'eventId')
  event;
}
