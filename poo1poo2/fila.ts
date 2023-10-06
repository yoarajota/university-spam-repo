export default class Fila {
    private elementos: Array<string>;
    private tamanho: number;
    private prioritarios: Array<number>;

    constructor() {
        this.elementos = [];
        this.tamanho = 0;
        this.prioritarios = [];
    }

    public enfileirar(elemento: string): boolean {
        this.elementos.push(elemento)
        this.tamanho++;
        return true;
    }

    public estaVazia(): boolean {
        return this.tamanho === 0;
    }

    public proximoElemento(): string {
        return this.elementos[0];
    }
    public desenfileirar(): string {
        this.tamanho--;

        return this.elementos.shift() ?? "";
    }
    public toString(): string {
        return this.elementos.join(", ");
    }
    public getTamanho(): number {
        return this.tamanho;
    }
    public enfileirarPrioritario(elementos: string): void {
        if (this.prioritarios.length === 0) {
            this.prioritarios.push(0);
            this.tamanho++;
            this.elementos.unshift(elementos)
        } else {
            let proxPrioritario = this.prioritarios[this.prioritarios.length - 1] + 1
            // this.prioritarios.push(proxPrioritario);
            // this.elementos.unshift(elementos)

            let arr = [];
            for (let i = 0; i < this.tamanho; i++) {
                if (i === proxPrioritario) {
                    arr.push(elementos)
                }
                arr.push(this.elementos[i])
            }
            
            this.tamanho++;
            this.elementos = arr;
        }
    }
}

class TestaFila {
    main() {
        let fila = new Fila()
        console.log(fila.estaVazia())

        fila.enfileirar('1')
        fila.enfileirar('2')
        fila.enfileirar('3')

        console.log(fila.getTamanho());
        console.log(fila.toString());

        console.log(fila.proximoElemento());

        fila.enfileirar('4')
        fila.enfileirar('5')
        fila.enfileirar('6')

        console.log(fila.estaVazia())

        fila.desenfileirar()

        console.log(fila.proximoElemento());

        fila.desenfileirar()

        console.log(fila.proximoElemento());

        console.log(fila.toString());

        console.log(fila.getTamanho());
    }
}

const COMERCIAL = 1
const FINANCEIRO = 2
class Atendimento {
    main(fila: number) {
        let comercial = new Fila()
        let financeiro = new Fila()

        switch (fila) {
            case COMERCIAL:
                comercial.enfileirar("C" + Math.floor(Math.random() * 999))
                console.log("C " + financeiro.desenfileirar())
                break;
            case FINANCEIRO:
                financeiro.enfileirar("F" + Math.floor(Math.random() * 999));
                console.log("F " + financeiro.desenfileirar())
            default:
                break;
        }
    }
}

class TestaPrioritario {
    main() {
        let fila = new Fila();
        fila.enfileirar("A")
        fila.enfileirar("BBBB")
        console.log(fila.toString())
        
        fila.enfileirarPrioritario("ASDSADSA")
        fila.enfileirarPrioritario("22")
        console.log(fila.toString())
        fila.enfileirar("3213213")
        console.log(fila.toString())
    }
}

