import { Schema, model } from "mongoose";

const EditoraSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

export default model("Editora", EditoraSchema);
