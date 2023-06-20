import { Body, Controller, Get, Post } from '@nestjs/common';

import { OrgGetService } from './services/org-get.service';
import { OrgCreateDTO } from './dto/org-create.dto';
import { OrgCreateService } from './services/org-create.service';
import { MemberSetService } from './services/member-set.service';
import { MemberSetDTO } from './dto/member-set.dto';

@Controller('organizations')
export class OrgController {
  constructor(
    private orgGetService: OrgGetService,
    private orgCreateService: OrgCreateService,
    private memberSetService: MemberSetService,
  ) {}

  @Get('all')
  async getAll() {
    return await this.orgGetService.getAll();
  }

  @Post('create')
  async createOrg(@Body() orgCreateDTO: OrgCreateDTO) {
    const data = await this.orgCreateService.createOrg(orgCreateDTO);

    return data;
  }

  @Post('member')
  async setMember(@Body() memberSetDTO: MemberSetDTO) {
    const member = await this.memberSetService.setMember(memberSetDTO);

    return member;
  }
}
