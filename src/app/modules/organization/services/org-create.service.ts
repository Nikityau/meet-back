import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OrgCreateDTO } from '../dto/org-create.dto';
import { OrganizationModel } from '../../../../db/models/organization.model';

@Injectable()
export class OrgCreateService {
  constructor(
    @InjectModel(OrganizationModel)
    private orgModel: typeof OrganizationModel,
  ) {}

  async createOrg(orgCreateDTO: OrgCreateDTO) {
    const org = await this.orgModel.create(orgCreateDTO);

    return {
      data: org,
    };
  }
}
