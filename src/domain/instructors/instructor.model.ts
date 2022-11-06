import { Document, Schema, model} from "mongoose";
import { Iinstructor } from "./instructor.interface";

const instructorSchema: Schema = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        speciality: {
            type: String,
            required: true
        },
        inFulfilSince: {
            type: String,
            required: true
        },
        about: {
            type: [String],
            required: true
        }
        
    },
    {
        timestamps: true,
    }
);

export const instructorModel = model<Iinstructor & Document>("Instructors", instructorSchema)