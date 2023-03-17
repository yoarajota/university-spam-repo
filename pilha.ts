export default class Pilha {
    private elementos: Array;
    private tamanho: number;

    public constructor(t: number) {
        this.tamanho = t;
        let arr: Array = [];
        for (let i = t; i !== 0; i--) {
            arr.push('')
        }
        this.elementos = arr;
    }

    public empilhar(elemento: string | number): void {
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

    public pegaPorPosicao(posicao: number): string | number {
        return this.elementos[posicao]
    }

    public somaTudo(): number {
        function add(accumulator: number | string, a: number | string) {
            if (typeof accumulator === 'string') {
                accumulator = parseInt(accumulator)
            }

            if (typeof a === 'string') {
                a = parseInt(a)
            }

            return accumulator + a;
        }

        let soma = this.elementos.reduce(add, 0);
        if (typeof soma === 'string') {
            soma = parseInt(soma)
        }

        return soma;
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
    main(arr: Array) {
        if (arr.length !== 10) {
            console.error("Necessário 10 itens.")
        }

        const P = new Pilha(10)

        for (let i of arr) {
            if (i % 2 === 0) {
                P.empilhar(i)
            } else {
                P.desempilhar()
                if (P.estaVazia()) {
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

class JogoPilha {
    main() {
        let p1 = new Pilha(3)
        let p2 = new Pilha(3)
        let p3 = new Pilha(3)
        for (let pilha of [p1, p2, p3]) {
            let random = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]
            for (let number of random) {
                pilha.empilhar(number)
            }
        }
        let pontos = [0, 0, 0]
        let empatou = false;
        for (let i = 0; i < 3; i++) {
            let a = p1.pegaPorPosicao(i)
            let b = p2.pegaPorPosicao(i)
            let c = p3.pegaPorPosicao(i)
            if ((a === b) && (b === c) && (a === c)) {
                empatou = true;
            } else if (a >= b && a >= c) {
                pontos[0] += p1.somaTudo();
                if (empatou) {
                    pontos[0] += p1.somaTudo();
                }
                empatou = false;
            }
            else if (b >= a && b >= c) {
                pontos[1] += p2.somaTudo();
                if (empatou) {
                    pontos[1] += p2.somaTudo();
                }
                empatou = false;
            }
            else {
                pontos[2] += p2.somaTudo();
                if (empatou) {
                    pontos[2] += p2.somaTudo();
                }
                empatou = false;
            }
        }

        if (pontos[0] >= pontos[1] && pontos[0] >= pontos[2]) {
            console.log("1 GANHOU")
        }
        else if (pontos[1] >= pontos[0] && pontos[1] >= pontos[2]) {
            console.log("2 GANHOU")
        }
        else {
            console.log("3 GANHOU")
        }
    }
}

new TestaPilha().main();
new OddOrEvens().main([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
new JogoPilha().main();
