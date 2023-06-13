import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { EventDTO } from '../dto/event.dto';

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
}
