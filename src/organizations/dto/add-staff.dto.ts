import { IsIn, IsUUID } from "class-validator";

export class AddStaffDto {

  @IsUUID()
  userId: string;

  @IsUUID()
  orgId: string;

  @IsIn(['user', 'moderator', 'admin'])
  role: 'user' | 'moderator' | 'admin'
}