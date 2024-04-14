import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, MenuIcon, User } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger className="absolute left-8 top-8">
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
          <MenuIcon />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="h-full">
        <SheetTitle></SheetTitle>
        <div className="relative h-fill-avaliable mt-8 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
          <div className="px-2 py-1.5 text-sm font-semibold">APICLAÇÃO X</div>
          <div className="-mx-1 my-1 h-px bg-muted"></div>
          <Link
            href="/vendas"
            className="cursor-pointer relative gap-2 flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground font-sans"
          >
            <User className="size-3.5" />
            Incluir Venda
          </Link>

          <Link
            href="/"
            className="absolute bottom-2 cursor-pointer gap-2 flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground font-sans"
          >
            <ChevronLeft className="size-3.5" />
            Voltar
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
