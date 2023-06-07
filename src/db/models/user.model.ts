import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';

import { UserDTO } from '../dto/user.dto';
import { BaseModel } from './base.model';
import { CommentModel } from './comment.model';

@Table({
  tableName: 'Users',
})
export class UsersModel extends BaseModel<UserDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gender;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthDay;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isReal;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'user',
  })
  role;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isNotify;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  canMessage;

  @HasMany(() => CommentModel, 'userId')
  comments;
}
