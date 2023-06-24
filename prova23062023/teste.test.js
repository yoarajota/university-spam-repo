const { Musicas } = require("./musicas");
const { playlist } = require("./playlist");

test('adicionar Musicas', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor"));
    pl.adicionar(1, new Musicas("Turururururu"));
    pl.adicionar(1, new Musicas("rala ralando o tcha"));

    expect(pl.tocar()).toMatch("E o amor");
    expect(pl.proxima()).toMatch("rala ralando o tcha");
    expect(pl.proxima()).toMatch("Turururururu");
});

test('remover Musicas', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor"));
    pl.adicionar(1, new Musicas("Turururururu"));
    pl.adicionar(1, new Musicas("rala ralando o tcha"));
    pl.remover(1);
    expect(pl.proxima()).toMatch("Turururururu");
});

test('proxima', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor"));
    pl.adicionar(1, new Musicas("Turururururu"));
    pl.adicionar(2, new Musicas("rala ralando o tcha"));
    expect(pl.proxima()).toMatch("Turururururu");
    expect(pl.proxima()).toMatch("rala ralando o tcha");
    expect(pl.proxima()).toMatch("rala ralando o tcha");
});

test('anterior', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor"));
    pl.adicionar(1, new Musicas("Turururururu"));
    pl.adicionar(2, new Musicas("rala ralando o tcha"));
    pl.proxima();
    pl.proxima();
    expect(pl.anterior()).toMatch("Turururururu");
    expect(pl.anterior()).toMatch("E o amor");
    expect(pl.anterior()).toMatch("E o amor");
});

test('listarMusicas', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor"));
    pl.adicionar(1, new Musicas("Turururururu"));
    pl.adicionar(2, new Musicas("rala ralando o tcha"));
    expect(pl.listarMusicas()).toMatch("[E o amor],[Turururururu],[rala ralando o tcha]");

});

test('tempoTotal', () => {
    let pl = new playlist();
    pl.adicionar(0, new Musicas("E o amor", 130));
    pl.adicionar(1, new Musicas("Turururururu", 120));
    pl.adicionar(2, new Musicas("rala ralando o tcha", 150));
    expect(pl.tempoTotal()).toEqual(400);

});