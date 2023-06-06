import { Column, Table, DataType } from 'sequelize-typescript';

import { TagDTO } from '../dto/tag.dto';
import { BaseModel } from './base.model';

@Table({
  tableName: 'Tags',
})
export class TagModel extends BaseModel<TagDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tag;
}
