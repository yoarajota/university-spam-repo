
export default class MenorDaPilha {
    private elementos: Array<number>;

    public constructor() {
        this.elementos = [];
    }

    public pop(): void {
        this.elementos.pop();
    }
    public push(n: number): void {
        this.elementos.push(n)
    }
    public min(): string | number | null {
        if (this.elementos.length === 0) {
            return "EMPTY";
        }

        let min = null;
        for (let n of this.elementos) {
            if (!min) {
                min = n;
            } else if (n < min) {
                min = n;
            }
        }

        return min;
    }
}

// NAO VEJO A NECESSIDADE DA PRIMEIRA LINHA;
let menorDaPilha = new MenorDaPilha();
let comandos = ["PUSH 5", "PUSH 7", "PUSH 3", "PUSH 8", "PUSH 10", "MIN", "POP", "POP", "MIN", "POP", "MIN"];
for (let comando of comandos) {
    if (comando.includes("PUSH ")) {
        let rep = comando.replace("PUSH ", "");
        menorDaPilha.push(parseInt(rep));
    } else if (comando.includes("MIN")) {
        console.log(menorDaPilha.min());
    } else {
        menorDaPilha.pop();
    }
}