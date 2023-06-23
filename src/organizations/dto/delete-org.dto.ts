import { IsUUID } from "class-validator";

export class DeleteOrgDto {

  @IsUUID()
  orgId: string;

  @IsUUID()
  userId: string;
}