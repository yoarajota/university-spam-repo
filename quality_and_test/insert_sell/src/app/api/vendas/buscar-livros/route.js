import Livros from "../../../../../models/Livros";
import connect from "../../../../../mongoose";
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { nextUrl: { search } } = request;
  const urlSearchParams = new URLSearchParams(search);
  const { titulo } = Object.fromEntries(urlSearchParams.entries());

  await connect();
  const books = await Livros.find({
    titulo: { $regex: titulo, $options: "i" },
  });

  return NextResponse.json({ books }, { status: 200 });
}
