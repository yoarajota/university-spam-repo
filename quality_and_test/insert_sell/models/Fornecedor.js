import { Schema, model } from "mongoose";

const FornecedorSchema = new Schema({
  cnpj: {
    type: String,
    required: true,
    maxLength: 14,
  },
});

export default model("Fornecedor", FornecedorSchema);
