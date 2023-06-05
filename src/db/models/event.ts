import {
  Column,
  Model,
  DataType,
  Table,
  BelongsTo,
} from 'sequelize-typescript';

import { Users } from './user';

@Table({
  tableName: 'Events',
})
export class Events extends Model {
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

  @BelongsTo(() => Users)
  userId;
}
