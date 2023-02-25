export default class Pilha {
    private elementos: Array<string|number>;
    private tamanho: number;

    public constructor(t: number) {
        this.tamanho = t;
        let arr: Array<string> = [];
        for (let i = t; i !== 0; i--) {
            arr.push('')
        }
        this.elementos = arr;
    }

    public empilhar(elemento: string|number): void {
        for (let index in this.elementos) {
            if (this.elementos[index] === "") {
                this.elementos[index] = elemento;
                break;
            }
        }
    }

    public topo(): string | number {
        let reverse = [...this.elementos];
        reverse.reverse()
        for (let e of reverse) {
            if (e !== "") {
                return e;
            }
        }
        return "Pilha vazia!";
    }

    public desempilhar(): string | number {
        let reverse = [...this.elementos];
        reverse.reverse()
        let r: string | number = '';
        for (let index in reverse) {
            if (reverse[index] !== "") {
                r = reverse[index]
                reverse[index] = '';
            }
        }
        
        reverse.reverse()
        this.elementos = reverse
        return r
    }

    public getTamanho(): number {
        return this.tamanho
    }

    public estaVazia(): boolean {
        for (let e of this.elementos) {
            if (e !== "") {
                return false;
            }
        }
        return true;
    }

    public toString(): string {
        let filter = this.elementos.filter((i) => i !== "")
        return filter.join(", ")
    }
}

class TestaPilha {
    main() {
        let p = new Pilha(5)

        console.log(p.estaVazia());

        let elementos = ["A", "B", "C"];
        for (let i of elementos) {
            p.empilhar(i)
        }

        console.log(p.toString());
        console.log(p.topo());

        let elementos2 = ["D", "E", "F"];

        for (let i of elementos2) {
            p.empilhar(i)
        }

        console.log(p.estaVazia());

        console.log(p.topo());
        p.desempilhar()
        console.log(p.topo());
        p.desempilhar()

        console.log(p.toString());
        console.log(p.getTamanho());
    }
}

class OddOrEvens {
    main(arr:Array<number>) {
        if (arr.length !== 10) {
            console.error("Necessário 10 itens.")
        }

        const P = new Pilha(10)

        for (let i of arr) {
            if (i%2 === 0) {
                P.empilhar(i)
            } else {
                P.desempilhar()
                if(P.estaVazia()) {
                    console.log("A pilha foi esvaziada!")
                }
            }
        }

        let loop = !P.estaVazia()
        while (loop) {
            console.log(P.desempilhar())
            loop = !P.estaVazia();
        }
    }
}

new TestaPilha().main()
new OddOrEvens().main([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])