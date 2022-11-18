import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateLeadDto {
    @IsString()
    readonly full_name: string;

    @IsString()
    readonly tg_username: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly course_id: string;
}

export class LeadDto extends CreateLeadDto {
    @IsString()
    readonly _id: string;

    @IsString()
    readonly createdAt: string;

    @IsString()
    readonly updatedAt: string;
}