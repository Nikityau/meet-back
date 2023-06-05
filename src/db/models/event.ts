import {
  Column,
  Model,
  DataType,
  Table,
  BelongsTo,
} from 'sequelize-typescript';

import { Users } from './user';

import { EventDTO } from '../dto/event.dto';

@Table({
  tableName: 'Events',
})
export class Events extends Model<EventDTO> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id;

  @Column({
    type: DataType.STRING,
  })
  title;
}
