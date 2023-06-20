import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OrganizationModel } from '../../../../db/models/organization.model';

@Injectable()
export class OrgGetService {
  constructor(
    @InjectModel(OrganizationModel)
    private orgModel: typeof OrganizationModel,
  ) {}

  async getAll() {
    const data = await this.orgModel.findAll();

    return {
      data,
    };
  }
}
