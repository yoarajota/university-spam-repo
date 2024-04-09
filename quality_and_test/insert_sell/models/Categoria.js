import { Schema, model, models } from "mongoose";

const CategoriaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

export default models.Categoria || model("Categoria", CategoriaSchema);
