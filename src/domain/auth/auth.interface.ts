import {UserRole} from "@/domain/user/user.enum";

export interface IPayload {
    id: string;
    phone: string;
    firstName: string;
    lastName: string;
    role: UserRole,
}