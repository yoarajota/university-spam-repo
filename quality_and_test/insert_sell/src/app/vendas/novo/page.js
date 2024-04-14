import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { VendasForm } from "@/components/vendas/VendasForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Novo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[850px]">
        <CardHeader>
          <Link href="/vendas">
            <Button size="sm" className="h-7 gap-1">
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Voltar
              </span>
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <VendasForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
