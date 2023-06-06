import { Column, Model, DataType, Table } from 'sequelize-typescript';

import { EventDTO } from '../dto/event.dto';
import { BaseModel } from './base.model';

@Table({
  tableName: 'Events',
})
export class EventsModel extends BaseModel<EventDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  previewImg;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mainImg;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endDate;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  startTime;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  endTime;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isArchive;
}
