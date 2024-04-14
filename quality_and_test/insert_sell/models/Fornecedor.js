import { Schema, model, models } from "mongoose";

const FornecedorSchema = new Schema({
  cnpj: {
    type: String,
    required: true,
    maxLength: 14,
  },
  razao_social: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
    maxLength: 20,
  },
});

export default models.Fornecedor || model("Fornecedor", FornecedorSchema);
