import { Schema, model, models } from "mongoose";

const VendasSchema = new Schema({
  data: {
    type: Date,
    required: true,
  },
  valor_total: {
    type: Number,
    required: true,
  },
  cliente_id: {
    type: Schema.Types.ObjectId,
    ref: "Clientes",
  },
});

export default models.Vendas || model("Vendas", VendasSchema);
