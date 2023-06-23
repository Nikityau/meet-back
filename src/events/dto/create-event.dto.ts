import { IsArray, IsDate, IsString, IsUUID } from "class-validator";

export class CreateEventDto {

  @IsUUID()
  userId: string;

  @IsUUID()
  orgId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  location: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsArray()
  tags: string[]
}