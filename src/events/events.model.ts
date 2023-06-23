import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { EventsModule } from "./events.module";
import { TagsModel } from "../tags/tags.model";
import { EventTagsModel } from "./event-tags.model";
import { UserModel } from "../users/user.model";
import { UserEventsModel } from "../users/user-events.model";

interface EventCreationAttrs {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  isArchive?: boolean;
  slug: string;
}

@Table({
  tableName: "events"
})
export class EventsModel extends Model<EventsModule, EventCreationAttrs> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  declare id;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  slug;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  location;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  startDate;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  endDate;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  isArchive;

  @BelongsToMany(() => TagsModel, () => EventTagsModel)
  tags: TagsModel[];

  @BelongsToMany(() => UserModel, () => UserEventsModel)
  organizers: UserModel[];
}