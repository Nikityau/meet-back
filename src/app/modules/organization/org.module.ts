import { Get, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OrgController } from './org.controller';
import { OrganizationModel } from '../../../db/models/organization.model';
import { OrgGetService } from './services/org-get.service';
import { OrgCreateService } from './services/org-create.service';
import { MemberSetService } from './services/member-set.service';
import { OrgMemberModel } from '../../../db/models/org-member.model';
import { MemberRoleModel } from '../../../db/models/member-role.model';
import { MemberRoleLinksModel } from '../../../db/models/member-role-links.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      OrganizationModel,
      OrgMemberModel,
      MemberRoleModel,
      MemberRoleLinksModel,
    ]),
  ],
  providers: [OrgGetService, OrgCreateService, MemberSetService],
  controllers: [OrgController],
})
export class OrgModule {}
