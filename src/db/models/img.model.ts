import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { ImgDTO } from '../dto/img.dto';

import { BaseModel } from './base.model';

@Table({
  tableName: 'Images',
})
export class ImgModel extends BaseModel<ImgDTO> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link;
}
