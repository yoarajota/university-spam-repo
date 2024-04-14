import { Schema, model, models } from "mongoose";

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

export default models.Clientes || model("Clientes", ClientesSchema);
