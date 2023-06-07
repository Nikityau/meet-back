import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { ImgDTO } from '../dto/img.dto';

import { BaseModel } from './base.model';
import { EventsModel } from './event.model';

@Table({
  tableName: 'Images',
})
export class ImgModel extends BaseModel<ImgDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link;

  @BelongsTo(() => EventsModel, 'eventId')
  images;
}
