import {BelongsToMany, Column, DataType, HasMany, HasOne, Model, PrimaryKey, Table} from "sequelize-typescript";
import {EventModel} from "./event.model";
import {EventsOrgsModel} from "../relations/events-orgs.model";

interface UserModelAttrs {
    id: string,
    name: string,
    surname: string,
    patronymic?: string,
    role: 'студент' | 'преподаватель'
}

@Table({
    tableName: 'users'
})
export class UserModel extends Model<UserModel, UserModelAttrs> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id;

    @Column({
        type: DataType.STRING,
        allowNull: false
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
        defaultValue: null
    })
    patronymic;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    avatar;

    @Column({
        type: DataType.ENUM('студент', 'преподаватель'),
        allowNull: false,
    })
    role;

    @BelongsToMany(() => EventModel, () => EventsOrgsModel)
    eventsOrganized: EventModel[];
}