import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserCreateValidationPipe } from "./pipes/user-create.pipe";
import { UserInputDTO, userInputSchema } from "./dto/user-input.dto";

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post('create')
    @UsePipes(new UserCreateValidationPipe(userInputSchema))
    async createUser(@Body() userInputData: UserInputDTO) {
        const user = await this.userService.createUser()
        
        return {
            "ok": true
        }
    }
}