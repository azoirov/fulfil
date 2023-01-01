import { Document, Schema, model } from "mongoose";
import { IOpenCourse } from "./open-course.interface";

const openCourseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cover_img: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    instructor_name: {
      type: String,
      required: true,
    },
    instructor_avatar: {
      type: String,
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
      default: []
    },
    
  },
  {
    timestamps: true,
  }
);

export const openCourseModel = model<IOpenCourse & Document>("openCourse", openCourseSchema);
