import { Schema, model } from "mongoose";

const ClientesSchema = new Schema({
  cpf: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: Date,
    required: true,
  },
});

export default model("Clientes", ClientesSchema);
