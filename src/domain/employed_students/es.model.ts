import { Document, model, Schema } from "mongoose";
import { IemployedStudents } from "./es.interface";


const employedStudentsSchema: Schema = new Schema(
 {
   fullName: {
    required: true,
    type: String,
   },
   avatar: {
    required: true,
    type: String,
   },
   speciality: {
    required: true,
    type: String,
   }
}, {
    timestamps: true,
},
);

export const employedStudentsModel = model<IemployedStudents & Document>("EmpleyedStudens", employedStudentsSchema)