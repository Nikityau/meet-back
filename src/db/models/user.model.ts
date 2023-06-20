import { DataType, Table, Column, BelongsToMany } from 'sequelize-typescript';

import { BaseModel } from './base.model';

import { UserDTO } from '../dto/user.dto';
import { OrganizationModel } from './organization.model';
import { OrgMemberModel } from './org-member.model';

@Table({
  tableName: 'Users',
})
export class UserModel extends BaseModel<UserDTO> {
  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  name;

  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  surname;

  @Column({
    type: DataType.CHAR(30),
    allowNull: true,
    defaultValue: null,
  })
  patronymic;

  @Column({
    type: DataType.ENUM('male', 'female'),
    allowNull: false,
  })
  gender;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthDay;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email;

  @Column({
    type: DataType.ENUM('user', 'moderator', 'admin'),
    allowNull: false,
    defaultValue: 'user',
  })
  role;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isNotify;

  @BelongsToMany(() => OrganizationModel, () => OrgMemberModel)
  organizations: OrganizationModel[];
}
