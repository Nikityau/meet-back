import {BelongsToMany, Column, DataType, Model, Table, Unique} from "sequelize-typescript";
import {EventModel} from "./event.model";
import {EventTagsModel} from "../relations/event-tags.model";


interface TagModelAttr {
    id: string,
    tag: string
}

@Table({
    tableName: 'tags'
})
export class TagModel extends Model<TagModel, TagModelAttr> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    declare id;

    @Unique('true')
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    tag;

    @BelongsToMany(() => EventModel, () => EventTagsModel)
    events: EventModel[];
}