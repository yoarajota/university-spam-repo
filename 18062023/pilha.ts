export default class Pilha<T> {
  public elementos: Array<T>;
  private tamanho: number;

  public constructor() {
    this.tamanho = 0;
    this.elementos = [];
  }

  public empilhar(elemento: T): void {
    this.tamanho++;
    this.elementos.unshift(elemento);
  }

  public topo(): T | string {
    let reverse = [...this.elementos];
    reverse.reverse();
    for (let e of reverse) {
      if (e !== "") {
        return e;
      }
    }
    return "Pilha vazia!";
  }

  public desempilhar(): T | string {
    this.tamanho--;
    return this.elementos.shift() ?? "";
  }

  public getTamanho(): number {
    return this.tamanho;
  }

  public estaVazia(): boolean {
    for (let e of this.elementos) {
      if (e !== "") {
        return false;
      }
    }
    return true;
  }

  public toString(): T | string {
    let filter = this.elementos.filter((i) => i !== "");
    return filter.join(", ");
  }

  public pegaPorPosicao(posicao: number): T | string {
    return this.elementos[posicao];
  }
}
