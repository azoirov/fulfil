import { IsString, IsArray } from "class-validator";
export class InstructorDto {
  @IsString()
  readonly  fullName: string;

  @IsString()
  readonly speciality: string;

  @IsString()
  readonly inFulfilSince: string;

  @IsArray()
  @IsString({each: true})
  readonly about: string[];

}

export class CreateInstructorDto extends InstructorDto {}