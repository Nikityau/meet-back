import {Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({
    tableName: 'images'
})
export class ImageModel extends Model<ImageModel> {
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
    img;
}