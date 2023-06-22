import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { RolesModel } from "../roles/roles.model";
import { UserRolesModel } from "./user-roles.model";
import { OrganizationsModel } from "../organizations/organizations.model";
import { OrgStaffModel } from "../org-staff/org-staff.model";
import { EventsModel } from "../events/events.model";
import { UserEventsModel } from "./user-events.model";


interface UserCreationAttrs {
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
  password: string;
}

@Table({
  tableName: "users"
})
export class UserModel extends Model<UserModel, UserCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname;


  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  patronymic;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password;

  @BelongsToMany(() => RolesModel, () => UserRolesModel)
  role: RolesModel;

  @BelongsToMany(() => OrganizationsModel, () => OrgStaffModel)
  organizations: OrganizationsModel[];

  @BelongsToMany(() => EventsModel, () => UserEventsModel)
  events_organized: EventsModel[];
}