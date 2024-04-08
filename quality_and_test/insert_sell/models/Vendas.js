import { Schema, model } from "mongoose";

const VendasSchema = new Schema({
  data: {
    type: Date,
    required: true,
  },
  valor_total: {
    type: Decimal128,
    required: true,
  },
  cliente_id: {
    type: Schema.Types.ObjectId,
    ref: "Clientes",
  },
});

export default model("Vendas", VendasSchema);
