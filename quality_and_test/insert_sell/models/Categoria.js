import { Schema, model } from "mongoose";

const CategoriaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

export default model("Categoria", CategoriaSchema);
