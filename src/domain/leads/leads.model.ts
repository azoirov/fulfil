import { Document, Schema, model } from "mongoose";
import { Ilead } from "./leads.interface"

const leadSchema: Schema = new Schema(
    {
        full_name: {
            type: String,
            required: true,
        },
        tg_username: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        course_id: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const leadModel = model<Ilead & Document>("leads", leadSchema);
