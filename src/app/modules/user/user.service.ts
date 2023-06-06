import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { CommentModel } from "src/db/models/comment.model";
import { UsersModel } from "src/db/models/user.model";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UsersModel)
        private userModel: typeof UsersModel,
        @InjectModel(CommentModel)
        private commentModel: typeof CommentModel
    ) {}

    async createComment() {
        const user = await this.userModel.create({
            name: 't1',
            surname: 't2',
            birthDay: new Date(),
            canMessage: true,
            email: 'ok',
            gender: 'male',
            image: 'ok',
            isNotify: true,
            isReal: true,
            password: '111',
            role: 'user'
        })

        const comment = await this.commentModel.create({
            comment: 'text...',
            'userId': user.id,
        })
    }
}