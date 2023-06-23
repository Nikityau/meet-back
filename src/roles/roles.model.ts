import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
  role: string;
}

@Table({
  tableName: 'roles'
})
export class RolesModel extends Model<RolesModel, RoleCreationAttrs>{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id;

  @Column({
    type: DataType.ENUM('user', 'moderator', 'admin'),
    unique: true,
    allowNull: false,
  })
  role;
}