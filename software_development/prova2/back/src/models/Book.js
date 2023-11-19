import { Schema, model } from "mongoose";

const Book = model(
  "book",
  new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: 30 },
    pageCount: { type: Number, required: true, min: 10 },
    excerpt: { type: String, maxlength: 425 },
    publishDate: { type: Date, required: true },
  }, { versionKey: false })
);

export default Book;
