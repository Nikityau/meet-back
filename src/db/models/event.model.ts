import {BelongsToMany, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {TagModel} from "./tag.model";
import {UserModel} from "./user.model";
import {EventsOrgsModel} from "../relations/events-orgs.model";
import {EventTagsModel} from "../relations/event-tags.model";
import {ImageModel} from "./image.model";
import {EventsImgsModel} from "../relations/events-imgs.model";

interface EventModelAttrs {
    id: string,
    title: string,
    description: string,
    location: string,
    startDate: Date,
    endDate: Date,
    startTime: string,
    isArchive: boolean
}

@Table({
    tableName: 'events'
})
export class EventModel extends Model<EventModel, EventModelAttrs> {
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
        type: DataType.STRING,
        allowNull: false,
    })
    preview;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    startDate;

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    endDate;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    startTime;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    isArchive;

    @BelongsToMany(() => UserModel, () => EventsOrgsModel)
    organizers: UserModel[];

    @BelongsToMany(() => TagModel, () => EventTagsModel)
    tags: TagModel[];

    @BelongsToMany(() => ImageModel, () => EventsImgsModel)
    gallery: ImageModel[];
}