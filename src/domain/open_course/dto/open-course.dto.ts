import { IsArray, IsMongoId, IsOptional, IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateOpenCourseDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly cover_img: string;

  @IsString()
  readonly duration: string;

  @IsString() 
  readonly link: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsString()
  readonly instructor_name: string;

  @IsString()
  readonly instructor_avatar: string;

  @IsArray()
  @IsString({ each: true })
  readonly subjects: string[];
}


export class OpenCourseDto extends CreateOpenCourseDto {
  @IsMongoId()
  _id: ObjectId;
}
