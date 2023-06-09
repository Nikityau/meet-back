import { Injectable } from "@nestjs/common";

import { UserModel } from "src/db/models/user.model";

@Injectable()
export class UserService {

    constructor(
        
    ) {}

    async createUser() {
        return {
            "ok": true
        }
    }
}