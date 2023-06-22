import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { OrgStaffModel } from "./org-staff.model";
import { RolesModel } from "../roles/roles.model";

@Table({
  tableName: 'org_staff_roles'
})
export class OrgStaffRolesModel extends Model<OrgStaffModel> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id;

  @ForeignKey(() => OrgStaffModel)
  @Column( {
    type: DataType.UUID,
    allowNull: false,
  })
  staffId;

  @ForeignKey(() => RolesModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  roleId;
}