import { IsIn, IsUUID } from "class-validator";

export class SetRoleDto {

  @IsIn(["user", "moderator", "admin"])
  role: string;

  @IsUUID()
  userId: string;
}