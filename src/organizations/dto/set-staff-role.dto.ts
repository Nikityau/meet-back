import { Contains, IsIn, IsUUID } from "class-validator";

export class SetStaffRoleDto {

  @IsUUID()
  orgId: string;

  @IsUUID()
  userId: string;

  @IsIn(['user', 'moderator', 'admin'])
  role: string;
}