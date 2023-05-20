const { TestaListaLigada } = require('../12052023/testaListaLigada')
const { ListaLigada } = require('../12052023/listaLigadas');
const { Aluno } = require('../12052023/aluno');

test("usando o testaListaLigada", () => {
    expect(new TestaListaLigada().main()).toBe("[(nome => Marina, idade => 10), (nome => Ronaldo, idade => 28), (nome => Carol, idade => 4), (nome => Betty, idade => 1)]");
});

test("test contem", () => {
    let Lista = new ListaLigada();
    let ronaldo = new Aluno("Ronaldo", 28);
    Lista.adicionaNoComeco(ronaldo)
    expect(Lista.contem(ronaldo)).toBe(true);
});



test("testa pega", () => {
    let Lista = new ListaLigada();
    Lista.adicionaNoComeco(new Aluno("Ronaldo", 28))
    Lista.adicionaNoComeco(new Aluno("asdasd", 28))
    let ronaldo = new Aluno("Ronaldo", 28);
    Lista.adicionaNoComeco(ronaldo)
    Lista.adicionaNoComeco(new Aluno("Ronaasdasdasdasdsaldo", 28))
    Lista.adicionaNoComeco(new Aluno("2131231321", 28))

    expect(Lista.pega(2)).toEqual(ronaldo);
});

test("testa peg 21312 3213 12 3a", () => {
    let Lista = new ListaLigada();
    Lista.adicionar(new Aluno("Ronaldo", 28))
    Lista.adicionar(new Aluno("asdasd", 28))
    Lista.adicionar(new Aluno("asdasd22222222222222222222", 28))
    Lista.removeDoFim()
    expect(Lista.toString(2)).toBe("[(nome => Ronaldo, idade => 28), (nome => asdasd, idade => 28)]");
});

