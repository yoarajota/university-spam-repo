"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Command, CommandEmpty, CommandList } from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

const formSchema = z
  .object({
    cpf: z.string().length(11),
    cliente_id: z.string(),
    nome: z.string(),
  })
  .required();

export function VendasForm() {
  const searchTimeout = useRef(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      cliente_id: "",
      nome: "",
    },
  });

  const [books, setBooks] = useState([]);
  const [rerenderList, setRerenderList] = useState(0);
  const [vendasItens, setVendasItens] = useState([]);

  async function onSubmit(values) {
    console.log(values);

    if (vendasItens.length === 0) {
      toast.error("Adicione pelo menos um item.");
      return;
    }

    if (!values.cliente_id) {
      toast.error("Insira um cliente valido!");
      return;
    }

    fetch("/api/vendas", {
      method: "POST",
      body: JSON.stringify({ ...values, vendas_itens: vendasItens }),
    }).then((response) => {
      if (response.ok) {
        toast.success("Venda realizada com sucesso!");
        form.reset();
        setVendasItens([]);
        setRerenderList((prev) => prev + 1);
      } else {
        toast.error("Erro ao realizar a venda.");
      }

    });
  }

  function search(value) {
    // Cancel the previous search
    clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(async () => {
      // Search logic
      const response = await fetch(
        "/api/vendas/buscar-livros?" +
          new URLSearchParams({
            titulo: value,
          })
      );

      const { books } = await response.json();
      setBooks(books);
    }, 1000);
  }

  async function searchCliente() {
    // Test if cpf is valid
    if (form.getValues().cpf.length !== 11) {
      return;
    }

    // Search logic
    const response = await fetch(
      "/api/vendas/buscar-cliente?" +
        new URLSearchParams({
          cpf: form.getValues().cpf,
        })
    );

    const { cliente } = await response.json();

    if (cliente) {
      console.log(cliente);

      form.setValue("nome", cliente.nome);
      form.setValue("cliente_id", cliente._id);

      console.log(form.getValues());
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6"
      >
        <FormItem>
          <FormLabel>N° Pedido</FormLabel>
          <FormControl>
            <Input disabled />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Data</FormLabel>
          <FormControl>
            <Input disabled />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input {...field} onBlur={searchCliente} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input {...field} onBlur={searchCliente} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Command className="col-span-2">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              onChange={(e) => search(e.target.value)}
              className={cn(
                "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:ring-transparent mb-2"
              )}
            />
          </div>
          <CommandList>
            {books.map((book) => (
              <Command key={book._id} className="px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {book.titulo} - {book.autor}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {book.ano_publicacao}
                    </span>
                  </div>
                  <Button
                    type="button"
                    onClick={() => {
                      setVendasItens((prev) => [
                        ...prev,
                        {
                          livro_id: book._id,
                          livro_id_mask: book.titulo,
                          quantidade: 1,
                          preco: book.valor_venda,
                        },
                      ]);

                      setRerenderList((prev) => prev + 1);
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              </Command>
            ))}
          </CommandList>
        </Command>
        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          Nome
        </div>
        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          Quantidade
        </div>
        {vendasItens.map((item, index) => (
          <React.Fragment key={rerenderList + `k` + item.livro_id}>
            <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              {item.livro_id_mask}
            </div>
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  onChange={(e) => {
                    const newVendasItens = [...vendasItens];
                    newVendasItens[index].quantidade = e.target.value;
                    setVendasItens(newVendasItens);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </React.Fragment>
        ))}

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
