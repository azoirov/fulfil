import {IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class SignUpDto {
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