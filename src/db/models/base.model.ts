import {Column, DataType, Model} from "sequelize-typescript";

export class BaseModel extends Model {
    @Column({
       type: DataType.UUID,
       defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    id;
}