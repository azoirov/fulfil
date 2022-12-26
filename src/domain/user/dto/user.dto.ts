import { IsString, MinLength, MaxLength } from "class-validator";

export class UserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly phone: string;

  @IsString()
  password: string;
}

export class CreateUserDto extends UserDto {}
