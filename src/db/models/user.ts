import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';

import { Events } from './event';

@Table({
  tableName: 'Users',
})
export class Users extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id;

  @Column({
    type: DataType.STRING,
  })
  name;

  @Column({
    type: DataType.STRING,
  })
  surname;

  @HasMany(() => Events)
  events;
}
