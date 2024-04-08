import { Decimal128 } from "bson";
import { Schema, model } from "mongoose";

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
    type: Decimal128,
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

export default model("Livros", LivrosSchema);
