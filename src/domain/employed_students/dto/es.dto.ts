import { IsString } from "class-validator";

export class EmployedStudentsDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly avatar: string;

  @IsString()
  readonly speciality: string;

  
}

export class CreateEmployedStudentsDto extends EmployedStudentsDto {}