import { IsString, IsArray } from "class-validator";
export class InstructorDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly avatar: string;

  @IsString()
  readonly phone: string;

  @IsArray()
  @IsString({each: true})
  readonly about: string[];

  @IsArray()
  @IsString({each: true})
  readonly speciality: string[];

  @IsArray()
  @IsString({each: true})
  readonly technologies: string[];
  
  @IsString()
  readonly experience: string;
  
  @IsString()
  readonly intExperience: string;
  
  @IsArray()
  @IsString({each: true})
  readonly studyAt: string[];

  @IsArray()
  @IsString({each: true})
  readonly workingAt: string[];

  @IsArray()
  @IsString({each: true})
  readonly workedAt: string[];

  @IsString()
  readonly inFulfilSince: string;
}

export class CreateInstructorDto extends InstructorDto {}