import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { RolesModel } from "../roles/roles.model";
import { UserModel } from "./user.model";

@Table({
  tableName: 'user_roles',
})
export class UserRolesModel extends Model<UserRolesModel>{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;


  @ForeignKey(() => RolesModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleId;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId;
}