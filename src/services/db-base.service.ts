import { Model } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

export class DbBaseService<T extends Model> {
  constructor(
    @InjectModel(Model<T>)
    protected model: typeof Model<T>,
  ) {}

  getById(id: string) {


    return;
  }
}
