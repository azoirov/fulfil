import { Document, Schema, model} from "mongoose";
import { Iinstructor } from "./instructor.interface";

const instructorSchema: Schema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
            min: 13,
            max: 13,
        },
        about: {
            type: [String],
            required: true
        },
        speciality: {
            type: [String],
            required: true
        },
        technologies: {
            type: [String],
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        intExperience: {
            type: String,
            required: true
        },
        studyAt: {
            type: [String],
            required: true
        },
        workingAt: {
            type: [String],
            required: true
        },
        workedAt: {
            type: [String],
            required: true
        },
        inFulfilSince: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export const instructorModel = model<Iinstructor & Document>("Instructors", instructorSchema)