import {IUser} from "@/domain/user/user.interface";
import { Document, model, Schema } from "mongoose";
import {UserRole} from "@/domain/user/user.enum";

const userSchema: Schema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String,
        min: 13,
        max: 13
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.User
    }
}, {
    timestamps: true
})

export const userModel = model<IUser & Document>("User", userSchema)