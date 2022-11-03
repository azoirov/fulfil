import { Document, Schema, model } from "mongoose";
import { Isp } from "./sp.interface";

const spSchema: Schema = new Schema(
  {
    sp_name: {
      type: String,
      required: true,
    },
    student_name: {
      type: String,
      required: true,
    },
    sp_number: {
      type: String,
      required: true,
    },
    sp_image: {
      type: String,
      required: true,
    },
    student_avatar: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const spModel = model<Isp & Document>("sp", spSchema);
