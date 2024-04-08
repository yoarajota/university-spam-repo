import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { VendasForm } from "@/components/vendas/VendasForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card 
        className="w-[850px]"
      >
        <CardHeader></CardHeader>
        <CardContent>
          <VendasForm />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </main>
  );
}
