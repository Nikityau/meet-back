import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CommentModel } from 'src/db/models/comment.model';
import { UsersModel } from 'src/db/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UsersModel)
    private userModel: typeof UsersModel,
    @InjectModel(CommentModel)
    private commentModel: typeof CommentModel,
  ) {}

  async createComment() {
    console.log('create');
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
      role: 'user',
    });

    console.log(user.id);

    const comment = await this.commentModel.create({
      comment: 'text...',
      userId: user.id,
    });

    console.log(comment);
  }

  //c2a4bfcc-bb3e-412b-a953-27904dd636d4

  async getAllUsers() {
    const data = await this.userModel.findAll({
      attributes: [
        'id',
        'name',
        'surname',
        'gender',
        'birthDay',
        'isReal',
        'image',
        'role',
      ],
      include: [
        {
          model: this.commentModel,
          attributes: ['id', 'eventId', 'comment'],
        },
      ],
    });

    return data;
  }
}
//c3391b4c-f1d5-4b01-a262-481015d3cfb0
