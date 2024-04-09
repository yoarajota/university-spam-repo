import { Schema, model, models } from "mongoose";

const LivrosSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  ano_publicacao: {
    type: Number,
    required: true,
  },
  valor_venda: {
    type: Number,
    required: true,
  },
  categoria_id: {
    type: Schema.Types.ObjectId,
    ref: "Categorias",
  },
  fornecedor_id: {
    type: Schema.Types.ObjectId,
    ref: "Fornecedores",
  },
  editora_id: {
    type: Schema.Types.ObjectId,
    ref: "Editoras",
  },
});

export default models.Livros || model("Livros", LivrosSchema);
