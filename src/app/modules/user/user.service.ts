import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { UserInputDTO } from './dto/user-input.dto';
import { UserModel } from 'src/db/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}

  async isUserExist(userInputData: UserInputDTO): Promise<boolean> {
    const user = await this.userModel.findOne({
      where: {
        email: userInputData.email,
      },
    });

    if (user) {
      return true;
    }

    return false;
  }

  async createUser(userInputData: UserInputDTO) {
    const isExist = await this.isUserExist(userInputData);

    if (isExist) {
      throw new BadRequestException(
        `user with email: ${userInputData.email} already exist`,
        {
          cause: new Error('user exist'),
          description: 'user already exist',
        },
      );
    }

    const user = await this.userModel.create(userInputData);

    return {
      status: 'created',
      data: user,
    };
  }

  async getAll() {
    const users = await this.userModel.findAll({
      attributes: [
        'id',
        'name',
        'surname',
        'patronymic',
        'email',
        'role',
        'birthDay',
        'gender',
        'isNotify',
      ],
    });

    return users;
  }
}
