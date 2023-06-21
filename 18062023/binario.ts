import Pilha from "./pilha";

function decimalToBinary(decimal: number): string {
  const stack = new Pilha<number>();

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.empilhar(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (!stack.estaVazia()) {
    binary += stack.desempilhar()?.toString();
  }

  return binary;
}

console.log(decimalToBinary(10));
