import { IsString, IsUUID } from "class-validator";

export class UpdTagDto {

  @IsUUID()
  tagId: string;

  @IsString()
  value;
}