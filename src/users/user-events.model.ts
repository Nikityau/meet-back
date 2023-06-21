import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { EventsModel } from "../events/events.model";
import { UserModel } from "./user.model";

@Table({
  tableName: 'user_events'
})
export class UserEventsModel extends Model<UserEventsModel> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id;

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
}