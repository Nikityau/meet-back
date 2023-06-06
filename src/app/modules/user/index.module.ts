import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserController } from './index.controller';
import { UserService } from './user.service';
import { UsersModel } from 'src/db/models/user.model';
import { CommentModel } from 'src/db/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([UsersModel, CommentModel])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
