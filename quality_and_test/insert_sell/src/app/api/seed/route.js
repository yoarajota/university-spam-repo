import Clientes from "../../../../models/Clientes";
import Fornecedor from "../../../../models/Fornecedor";
import Editora from "../../../../models/Editora";
import Categoria from "../../../../models/Categoria";
import Livros from "../../../../models/Livros";
import connect from "../../../../mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connect();

  try {
    await Fornecedor.insertMany([
      {
        razao_social: "Fornecedor Teste",
        cnpj: "12345678900",
        telefone: "324",
      },
      {
        razao_social: "Fornecedor Teste 2",
        cnpj: "12345678901",
        telefone: "234",
      },
      {
        razao_social: "Fornecedor Teste 3",
        cnpj: "12345678902",
        telefone: "123",
      },
      {
        razao_social: "Fornecedor Teste 4",
        cnpj: "12345678903",
        telefone: "321",
      },
      {
        razao_social: "Fornecedor Teste 5",
        cnpj: "12345678904",
        telefone: "123",
      },
    ]);

    await Clientes.insertMany([
      {
        nome: "Cliente Teste",
        cpf: "12345678900",
        telefone: "423",
        data_nascimento: new Date(),
      },
      {
        nome: "Cliente Teste 2",
        cpf: "12345678901",
        telefone: "324",
        data_nascimento: new Date(),
      },
      {
        nome: "Cliente Teste 3",
        cpf: "12345678902",
        telefone: "234",
        data_nascimento: new Date(),
      },
      {
        nome: "Cliente Teste 4",
        cpf: "12345678903",
        telefone: "123",
        data_nascimento: new Date(),
      },
      {
        nome: "Cliente Teste 5",
        cpf: "12345678904",
        telefone: "324",
        data_nascimento: new Date(),
      },
    ]);

    await Categoria.insertMany([
      {
        nome: "Categoria Teste",
      },
      {
        nome: "Categoria Teste 2",
      },
      {
        nome: "Categoria Teste 3",
      },
      {
        nome: "Categoria Teste 4",
      },
      {
        nome: "Categoria Teste 5",
      },
    ]);
    
    await Editora.insertMany(
      {
        nome: "Editora Teste",
      },
      {
        nome: "Editora Teste 2",
      },
      {
        nome: "Editora Teste 3",
      },
      {
        nome: "Editora Teste 4",
      },
      {
        nome: "Editora Teste 5",
      }
    );

    const fornecedores = await Fornecedor.find({});
    const categorias = await Categoria.find({});
    const editoras = await Editora.find({});

    await Livros.insertMany([
      {
        titulo: "Livro Teste",
        autor: "Autor Teste",
        ano_publicacao: 2021,
        valor_venda: 100,
        categoria_id: categorias[0]._doc._id,
        fornecedor_id: fornecedores[0]._doc._id,
        editora_id: editoras[0]._doc._id,
      },
      {
        titulo: "Livro Teste 2",
        autor: "Autor Teste 2",
        ano_publicacao: 2021,
        valor_venda: 400,
        categoria_id: categorias[1]._doc._id,
        fornecedor_id: fornecedores[1]._doc._id,
        editora_id: editoras[1]._doc._id,
      },
    ]);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao inserir dados" },
      { status: 500 }
    );
  }
}
