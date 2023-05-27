import { assert } from "console";
import { ListaLigada } from "../12052023/listaLigadas";
const mock100 = require("./mock100.json");
const mock1000 = require("./mock1000.json");
const mock1000000 = require("./mock1000000.json");

const dados = (length: number) => {
    switch (length) {
        case 100:
            return mock100
        case 1000:
            return mock1000
        case 1000000:
            return mock1000000
    }
}

function inicioArray(length: number) {
    const inicio: Date = new Date();
    let arr = [];
    for (let x of dados(length)) {
        arr.unshift(x);
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}

function inicioLista(length: number) {
    let a = new ListaLigada();
    const inicio: Date = new Date();
    for (let x of dados(length)) {
        a.adicionaNoComeco(x);
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}

function insertInMiddle(array: Array<object>, element: object) {
    let middle = Math.floor(array.length / 2);
    for (let i = array.length - 1; i >= middle; i--) {
        array[i + 1] = array[i];
    }
    array[middle] = element;
    return array;
}

function meioArray(length: number) {
    const inicio: Date = new Date();
    let arr: Array<object> = [];
    for (let x of dados(length)) {
        arr = insertInMiddle(arr, x)
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}

function meioLista(length: number) {
    let a = new ListaLigada();
    const inicio: Date = new Date();
    for (let x of dados(length)) {
        a.adiciona(Math.floor(a._totalDeElementos / 2) ?? 0, x);
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}

function fimArray(length: number) {
    const inicio: Date = new Date();
    let arr = [];
    for (let x of dados(length)) {
        arr.push(x);
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}

function fimLista(length: number) {
    let a = new ListaLigada();
    const inicio: Date = new Date();
    for (let x of dados(length)) {
        a.adicionar(x);
    }
    const fim: Date = new Date();
    return Math.abs(inicio.getTime() - fim.getTime())
}



const testa = async () => {
    let result = {
        array: {
            "100 Início": 0,
            "100 Meio": 0,
            "100 Fim": 0,
            "1000000 Início": 0,
            "1000000 Meio": 0,
            "1000000 Fim": 0
        },
        lista: {
            "100 Início": 0,
            "100 Meio": 0,
            "100 Fim": 0,
            "1000000 Início": 0,
            "1000000 Meio": 0,
            "1000000 Fim": 0
        }
    };

    result.array["100 Início"] = inicioArray(100);
    result.lista["100 Início"] = inicioLista(100);
    result.array["100 Meio"] = meioArray(100);
    result.lista["100 Meio"] = meioLista(100);
    result.array["100 Fim"] = fimArray(100);
    result.lista["100 Fim"] = fimLista(100);

    result.array["1000000 Início"] = inicioArray(1000000);
    result.lista["1000000 Início"] = inicioLista(1000000);
    result.array["1000000 Meio"] = meioArray(1000000);
    result.lista["1000000 Meio"] = meioLista(1000000);
    result.array["1000000 Fim"] = fimArray(1000000);
    result.lista["1000000 Fim"] = fimLista(1000000);

    console.table(result)
}

testa();
