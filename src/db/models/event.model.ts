import {Column, DataType, Table} from "sequelize-typescript";
import {BaseModel} from "./base.model";

@Table
export class EventModel extends BaseModel {
    @Column({
        type: DataType.STRING
    })
    title;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description;

}