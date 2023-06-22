import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserModel } from "../users/user.model";
import { OrgStaffModel } from "../org-staff/org-staff.model";


interface OrgCreationAttrs {
  title: string;
  description: string;
}

@Table({
  tableName: 'organizations'
})
export class OrganizationsModel extends Model<OrganizationsModel, OrgCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description;


  @BelongsToMany(() => UserModel, () => OrgStaffModel)
  staff: UserModel[];
}