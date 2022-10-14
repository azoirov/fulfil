import {UserRole} from "@/domain/user/user.enum";

export interface IUser {
    _id: string;
    phone: string;
    firstName: string;
    lastName: string;
    password: string;
    role: UserRole
}