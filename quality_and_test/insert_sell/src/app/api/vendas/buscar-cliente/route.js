import Clientes from "../../../../../models/Clientes";
import connect from "../../../../../mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const {
    nextUrl: { search },
  } = request;
  const urlSearchParams = new URLSearchParams(search);
  const { cpf } = Object.fromEntries(urlSearchParams.entries());

  await connect();
  const cliente = await Clientes.findOne({
    cpf: { $regex: cpf, $options: "i" },
  });

  return NextResponse.json({ cliente }, { status: 200 });
}
