import { Schema } from "mongoose";

export const GalaxiesSchema = new Schema({
  Name: { type: String, required: true, maxlength: 25 },
  Stars: { type: Number, required: true }

}, { timestamps: true, toJSON: { virtuals: true } })