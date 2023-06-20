import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { MemberSetDTO } from '../dto/member-set.dto';
import { OrganizationModel } from '../../../../db/models/organization.model';
import { OrgMemberModel } from '../../../../db/models/org-member.model';
import { MemberRoleModel } from '../../../../db/models/member-role.model';
import { MemberRoleLinksModel } from '../../../../db/models/member-role-links.model';

@Injectable()
export class MemberSetService {
  constructor(
    @InjectModel(OrganizationModel)
    private orgModel: typeof OrganizationModel,
    @InjectModel(OrgMemberModel)
    private orgMemberRole: typeof OrgMemberModel,
    @InjectModel(MemberRoleModel)
    private memberRole: typeof MemberRoleModel,
    @InjectModel(MemberRoleLinksModel)
    private roleLinks: typeof MemberRoleLinksModel,
  ) {}

  async setMember(memberSetDTO: MemberSetDTO) {}
}
