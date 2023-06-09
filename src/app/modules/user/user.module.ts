import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { UserController } from "./user.controller";

import { UserModel } from "src/db/models/user.model";
import { UserService } from "./user.service";
import { UserCreateValidationPipe } from "./pipes/user-create.pipe";

@Module({
    imports: [SequelizeModule.forFeature([UserModel])],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}