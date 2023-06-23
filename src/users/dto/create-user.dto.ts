import { IsEmail, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({
    type: "string",
    description: "user name"
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: "string",
    description: "user surname"
  })
  @IsString()
  surname: string;

  @ApiProperty({
    type: "string",
    description: "user patronymic"
  })
  @IsString()
  @IsOptional()
  patronymic?: string;

  @ApiProperty({
    type: "string",
    description: "user email"
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: "string",
    description: "user password"
  })
  @IsString()
  password: string;
}
