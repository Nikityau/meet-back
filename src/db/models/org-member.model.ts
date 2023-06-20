import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import { OrgMemberDTO } from '../dto/org-member.dto';

import { BaseModel } from './base.model';
import { OrganizationModel } from './organization.model';
import { UserModel } from './user.model';
import { MemberRoleModel } from './member-role.model';
import { MemberRoleLinksModel } from './member-role-links.model';

@Table({
  tableName: 'OrganizationsMembers',
})
export class OrgMemberModel extends BaseModel<OrgMemberDTO> {
  @ForeignKey(() => OrganizationModel)
  @Column({
    type: DataType.UUID,
  })
  organizationId;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.UUID,
  })
  userId;

  @BelongsToMany(() => MemberRoleModel, () => MemberRoleLinksModel)
  roles: MemberRoleModel[];
}
