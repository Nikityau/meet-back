import { BelongsTo, Column, DataType, Table } from "sequelize-typescript";

import { BaseModel } from "./base.model";

import { CommentDTO } from "../dto/comment.dto";
import { UsersModel } from "./user.model";

@Table({
    tableName: 'Comments',
})
export class CommentModel extends BaseModel<CommentDTO> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    comment;

    @BelongsTo(() => UsersModel, 'id')
    userId; 
}