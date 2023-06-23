import { IsUUID } from "class-validator";

export class RemoveStaffDto {
  @IsUUID()
  orgId: string;

  @IsUUID()
  staffId: string;
}