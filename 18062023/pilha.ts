// import Fila from "./fila";
// import Pilha from "./pilha";

// export default class IdentificadorEstruturas {
//     PILHA = 1;
//     FILA = 2;
//     PRIORITARIA = 3;

//     protected testa(tipo: number, arr: Array<Array<number>>): boolean {
//         let testador = null;
//         switch (tipo) {
//             case this.PILHA:
//                 testador = new Pilha();
//                 for (const lineCommand of arr) {
//                     switch (lineCommand[0]) {
//                         case 1:
//                             testador.empilhar(lineCommand[1]);
//                             continue;
//                         case 2:
//                             if (testador.desempilhar() !== lineCommand[1]) {
//                                 return false;
//                             }
//                             continue;
//                         default:
//                             continue;
//                     }
//                 }
//                 return true;
//             case this.FILA:
//                 return this.testaFila(arr); // SEPAREI PQ TAVA MTO CODIGO
//         }
//     }

//     protected testaFila(arr) {
//         let testador = new Fila();
//         let prioritario = false;

//         for (const lineCommand of arr) {
//             // const [comando, valor] = lineCommand;
//             const comando = lineCommand[0];
//             const valor = lineCommand[1];

//             switch (comando) {
//                 case 1:
//                     testador.enfileirar(valor);
//                     continue;
//                 case 2:
//                     const primeiroElemento = testador.primeiroElemento();
//                     const desenfileirado = testador.desenfileirar();

//                     if (desenfileirado !== valor) {
//                         return false;
//                     }

//                     if (testador.getTamanho() !== 0 && primeiroElemento !== desenfileirado) {
//                         prioritario = true;
//                     }

//                     continue;
//                 default:
//                     continue;
//             }
//         }

//         return prioritario ? this.PRIORITARIA : this.FILA;
//     }

//     protected montaFuncaoValorArr(functions, output): Array<Array<number>> {
//         let arr: Array<Array<number>> = [];
//         for (let i = 0; i < functions.length; i++) {
//             arr[i] = [functions[i], output[i]];
//         }

//         return arr;
//     }

//     identificarEstrutura(functions, output: number[]): string {
//         const arr = this.montaFuncaoValorArr(functions, output);

//         const pilha = this.testa(this.PILHA, arr);
//         let fila = this.testa(this.FILA, arr);
//         let filaPrioritaria = false;

//         if (fila !== false) {
//             switch (fila) {
//                 case this.FILA:
//                     fila = true;
//                 case this.PRIORITARIA:
//                     fila = true;
//                     filaPrioritaria = true;
//             }
//         }

//         if (!pilha && !fila) {
//             return "impossible";
//         }

//         if (filaPrioritaria && !pilha) {
//             return "priority queue";
//         }

//         if (fila) {
//             return "queue";
//         }

//         if (pilha) {
//             return "stack";
//         }
//     }
// }

// let teste = [
//     [
//         [1, 1, 1, 2, 2, 2],
//         [1, 2, 3, 1, 2, 3]
//     ],
//     [
//         [1, 2],
//         [1, 2]
//     ],
//     [[1, 1, 2, 2],
//     [2, 1, 1, 2]],
//     [[1, 1, 1, 1, 2, 1, 2],
//     [2, 5, 1, 3, 5, 4, 4]]
// ];

// // CONSIDERAR QUE, SEM UMA LÓGICA SOB QUAL ELEMENTO É PRIORITÁRIO, FICARIA DIFICIL TESTAR COM ESSES OUTPUT'S
// // ENTÃO, SE POSSÍVEL, COSIDERAR LER O MÉTODO TESTA() E VER SE A LÓGICA É APLICAVEL NUM LOCAL ONDE ELEMENTOS ALEATÓRIOS SERIAM OS PRIORITÁRIOS.

// for (let x of teste) {
//     console.log(new IdentificadorEstruturas().identificarEstrutura(x[0], x[1]));
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// OUTRAS CLASSES
// export default class Fila {
//     public elementos: Array<string>;
//     private tamanho: number;
//     private prioritarios: Array<number>;

//     constructor() {
//         this.elementos = [];
//         this.tamanho = 0;
//         this.prioritarios = [];
//     }

//     public enfileirar(elemento: string): boolean {
//         this.elementos.push(elemento)
//         this.tamanho++;
//         return true;
//     }

//     public estaVazia(): boolean {
//         return this.tamanho === 0;
//     }

//     public primeiroElemento(): string {
//         return this.elementos[0];
//     }
//     public desenfileirar(): string|number {
//         this.tamanho--;

//         return this.elementos.shift() ?? "";
//     }
//     public toString(): string {
//         return this.elementos.join(", ");
//     }
//     public getTamanho(): number {
//         return this.tamanho;
//     }
//     public enfileirarPrioritario(elementos: string): void {
//         if (this.prioritarios.length === 0) {
//             this.prioritarios.push(0);
//             this.tamanho++;
//             this.elementos.unshift(elementos)
//         } else {
//             let proxPrioritario = this.prioritarios[this.prioritarios.length - 1] + 1
//             // this.prioritarios.push(proxPrioritario);
//             // this.elementos.unshift(elementos)

//             let arr = [];
//             for (let i = 0; i < this.tamanho; i++) {
//                 if (i === proxPrioritario) {
//                     arr.push(elementos)
//                 }
//                 arr.push(this.elementos[i])
//             }

//             this.tamanho++;
//             this.elementos = arr;
//         }
//     }
// }

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
