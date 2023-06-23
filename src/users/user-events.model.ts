import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventsModel } from "../events/events.model";
import { UserModel } from "./user.model";
import { OrganizationsModel } from "../organizations/organizations.model";

interface UserEventCreationAttrs {
  userId: string;
  eventId: string;
  orgId: string;
}

@Table({
  tableName: 'user_events'
})
export class UserEventsModel extends Model<UserEventsModel, UserEventCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id;

  @ForeignKey(() => UserModel)
  @Column( {
    type: DataType.UUID,
    allowNull: false
  })
  userId;

  @ForeignKey(() => EventsModel)
  @Column( {
    type: DataType.UUID,
    allowNull: false
  })
  eventId;

  @ForeignKey(() => OrganizationsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  orgId;
}