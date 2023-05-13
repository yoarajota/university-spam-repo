export default class Aluno {
    private nome: string;
    private idade: number;

    constructor(pnome: string, pidade: number) {
        this.nome = pnome;
        this.idade = pidade;
    }

    toString() {
        return "(nome => " + this.nome + ", idade => " + this.idade + ")";
    }
}