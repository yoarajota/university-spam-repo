import Usuario from "./Usuario";

export default class Fila {
  public elementos: Array<Usuario>;
  private tamanho: number;

  constructor() {
    this.elementos = [];
    this.tamanho = 0;
  }

  public enfileirar(elemento: Usuario): boolean {
    this.elementos.push(elemento);
    this.tamanho++;
    return true;
  }

  public estaVazia(): boolean {
    return this.tamanho === 0;
  }

  public primeiroElemento(): Usuario {
    return this.elementos[0];
  }
  public desenfileirar(): Usuario {
    this.tamanho--;
    return this.elementos.shift() ?? "";
  }
  public toString(): string {
    return this.elementos.join(", ");
  }
  public getTamanho(): number {
    return this.tamanho;
  }
}
