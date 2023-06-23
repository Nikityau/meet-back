import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { OrganizationsModel } from "../organizations/organizations.model";
import { UserModel } from "../users/user.model";

interface OrgStaffCreationAttrs {
  userId: string;
  orgId: string;
  role: 'user' | 'moderator' | 'admin';
}

@Table({
  tableName: 'org_staff'
})
export class OrgStaffModel extends Model<OrgStaffModel, OrgStaffCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id;

  @ForeignKey(() => OrganizationsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  orgId;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId;

  @Column({
    type: DataType.ENUM('user', 'moderator', 'admin'),
    defaultValue: 'user'
  })
  role;
}