
'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import VendasTable from "@/components/vendas/VendasTable";
import { useEffect, useState } from "react";

// Fetch data
export async function getData(setData) {
  const res = await fetch("http://localhost:3000/api/vendas");
  const { vendas } = await res.json();

  return setData(vendas);
}

export default function Vendas() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[850px]">
        <CardHeader></CardHeader>
        <CardContent>
          <VendasTable 
            vendas={data}
          />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
