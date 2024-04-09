import { Schema, model, models } from "mongoose";

const EditoraSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

export default models.Editora || model("Editora", EditoraSchema);
