import mongoose, { Schema } from "mongoose";

const MoviesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  synopsys: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  }
});

const MoviesModel = mongoose.model("Movies", MoviesSchema);

export default MoviesModel;
