import { BelongsToMany, Column, DataType, Table } from 'sequelize-typescript';

import { OrganizationDTO } from '../dto/organization.dto';

import { BaseModel } from './base.model';
import { OrgMemberModel } from './org-member.model';
import { UserModel } from './user.model';

@Table({
  tableName: 'Organizations',
})
export class OrganizationModel extends BaseModel<OrganizationDTO> {
  @Column({
    type: DataType.CHAR(256),
    allowNull: false,
    unique: true,
  })
  title;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description;

  @BelongsToMany(() => UserModel, () => OrgMemberModel)
  members: UserModel[];
}
