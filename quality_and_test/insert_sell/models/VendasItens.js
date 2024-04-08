import { Schema, model } from "mongoose";

const VendasItensSchema = new Schema({
  livro_id: {
    type: Schema.Types.ObjectId,
    ref: "Livros",
  },
  venda_id: {
    type: Schema.Types.ObjectId,
    ref: "Vendas",
  },
  quantidade: {
    type: Number,
    required: true,
  },
});

export default model("VendasItens", VendasItensSchema);
