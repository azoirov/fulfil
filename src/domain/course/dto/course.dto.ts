import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";

export class CourseProjectDto {
  @IsString()
  readonly icon: string;

  @IsString()
  readonly title: string;
}

export class CourseCommentDto {
  @IsString()
  readonly avatar: string;

  @IsString()
  readonly fullName: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly text: string;

  @IsString()
  readonly phone: string;
}

export class FaqDto {
  @IsString()
  readonly question: string;

  @IsString()
  readonly answer: string;
}

export class CourseDto {
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsString()
  readonly excerpt: string;

  @IsArray()
  @IsString({ each: true })
  readonly features: string[];

  @IsArray()
  @IsString({ each: true })
  readonly contents: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CourseProjectDto)
  readonly projects: CourseProjectDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CourseCommentDto)
  readonly comments?: CourseCommentDto[];

  @IsArray()
  @IsString({ each: true })
  readonly audiances: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FaqDto)
  readonly faqs: FaqDto[];
}

export class UpdateCourseDto extends CourseDto {}
