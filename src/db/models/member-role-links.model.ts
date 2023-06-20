import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

import { BaseModel } from './base.model';
import { MemberRoleLinksDTO } from '../dto/member-role-links.dto';
import { MemberRoleModel } from './member-role.model';
import { OrgMemberModel } from './org-member.model';

@Table({
  tableName: 'MembersRolesLinks',
})
export class MemberRoleLinksModel extends BaseModel<MemberRoleLinksDTO> {
  @ForeignKey(() => MemberRoleModel)
  @Column({
    type: DataType.UUID,
  })
  roleId;

  @ForeignKey(() => OrgMemberModel)
  @Column({
    type: DataType.UUID,
  })
  orgMemberId;
}
