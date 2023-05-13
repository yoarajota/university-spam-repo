import Aluno from "./aluno";
import { ListaLigada } from "./listaLigadas";

class TestaListaLigada {
    constructor() {
        let Lista = new ListaLigada();
        Lista.adicionaNoComeco(new Aluno("Ronaldo", 28))
        Lista.adicionar(new Aluno("Carol", 4))
        Lista.adiciona(2, new Aluno("Betty", 1))
        Lista.adicionaNoComeco(new Aluno("Marina", 10))

        console.log(Lista.toString());
    }
}

new TestaListaLigada()