import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";

export class spDto {
  @IsString()
  readonly sp_name: string;

  @IsString()
  readonly student_name: string;

  @IsString()
  readonly sp_number: string;

  @IsString()
  readonly sp_image: string;

  @IsString()
  readonly student_avatar: string;
}
