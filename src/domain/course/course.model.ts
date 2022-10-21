import { Document, Schema, model } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
      default: [],
    },
    contents: {
      type: [String],
      required: true,
      default: [],
    },
    projects: {
      type: [
        {
          _id: false,
          title: {
            type: String,
            required: true,
          },
          icon: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
      default: [],
    },
    comments: {
      type: [
        {
          _id: false,
          avatar: {
            type: String,
            required: true,
          },
          fullName: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
        },
      ],
      default: [],
    },
    audiances: {
      type: [String],
      default: [],
      required: true,
    },
    preferences: {
      type: [String],
      default: [],
      required: true,
    },
    faqs: {
      type: [
        {
          question: {
            type: String,
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const courseModel = model<ICourse & Document>("Course", courseSchema);
