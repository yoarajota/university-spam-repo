import { NextResponse } from "next/server";
import Vendas from "../../../../models/Vendas";
import connect from "../../../../mongoose";

export async function GET(request) {
  await connect();

  const vendas = await Vendas.find().populate("cliente_id");

  return NextResponse.json({ vendas }, { status: 200 });
}

export async function POST(request) {
  await connect();

  const body = await request.json();

  let valor_total = 0;
  for (const item of body.vendas_itens ?? []) {
    valor_total += item.quantidade * item.preco.$numberDecimal;
  }

  await Vendas.create({
    data: new Date(),
    valor_total,
    cliente_id: body.cliente_id,
  });

  return NextResponse.json({ message: "Inserido com sucesso" }, { status: 200 });
}
