import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";

export class LeadDto {
    @IsString()
    readonly full_name: string;

    @IsString()
    readonly tg_username: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly course_id: string;
}
