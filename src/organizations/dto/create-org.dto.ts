import { ArrayNotEmpty, IsArray, IsString, IsUUID } from "class-validator";

interface Staff {
  userId: string;
  role: 'user' | 'moderator' | 'admin'
}

export class CreateOrgDto {

  @IsUUID()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  staff: Staff[]
}