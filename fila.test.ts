const { default: Fila } = require("./fila.ts");

test('estaVazia', () => {
    let f = new Fila();
    expect(f.estaVazia()).toBe(true);
    f.enfileirar("Oi");
    expect(f.estaVazia()).toBe(false);
});

test('proximoElemento', () => {
    let f = new Fila();
    f.enfileirar("Oi");

    expect(f.proximoElemento()).toBe("Oi");
    expect(f.estaVazia()).toBe(false);
});


test('desenfileirar', () => {
    let f = new Fila();
    f.enfileirar("Oi");

    expect(f.estaVazia()).toBe(false);
    expect(f.desenfileirar()).toBe("Oi");
    expect(f.estaVazia()).toBe(true);
});

test('toString', () => {
    let f = new Fila();
    f.enfileirar("Oi");

    expect(f.toString()).toBe("Oi");
    f.enfileirar("Oi 2");
    f.enfileirar("Oi 3");
    expect(f.toString()).toBe("Oi, Oi 2, Oi 3");
});


