import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';
import { MemberRoleDTO } from '../dto/member-role.dto';

@Table({
  tableName: 'MembersRoles',
})
export class MemberRoleModel extends BaseModel<MemberRoleDTO> {
  @Column({
    type: DataType.ENUM('user', 'creator', 'admin'),
    allowNull: false,
    defaultValue: 'user',
    unique: true,
  })
  role;
}
