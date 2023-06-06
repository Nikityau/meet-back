import { Column, DataType, Model } from 'sequelize-typescript';

export class BaseModel<T> extends Model<T> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id;
}
