// • Imprimir novamente a lista

import { ListaDuplamenteLigada } from ".";

class Carro {
    private modelo: string;
    private ano: number;
    private potencia: number;

    constructor(modelo: string, ano: number, potencia: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.potencia = potencia;
    }

    toString(): string {
        return "[Carro=" + this.modelo + "-" + this.ano + "-" + this.potencia + "]";
    }
}

function testaListaDuplamenteLigada() {
    let a = new ListaDuplamenteLigada();
    a.adicionar(new Carro("Corsa", 2009, 85));
    let ka = new Carro("KA", 2020, 130);
    a.adiciona(2, ka);
    a.adicionaNoComeco(new Carro("Gol", 2010, 106));
    console.log(a.toString());
    console.log(a.tamanho());
    a.remove(3)
    console.log(a.toString());
    a.removeDoComeco()
    console.log(a.pega(1));
    a.removeDoFim()
    console.log(a.contem(ka))
    console.log(a.toString());
}

testaListaDuplamenteLigada();
