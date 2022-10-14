export class UserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly phone: string;
    readonly password: string;
}

export class CreateUserDto extends UserDto {}