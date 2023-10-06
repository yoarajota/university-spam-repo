var PontoVenda = /** @class */ (function () {
    function PontoVenda(local, pontoAnterior, pontoPosterior, distancia, tempoViagem) {
        if (distancia === void 0) { distancia = 0; }
        if (tempoViagem === void 0) { tempoViagem = 0; }
        this.local = local;
        this.pontoAnterior = pontoAnterior;
        this.pontoPosterior = pontoPosterior;
        this.distancia = distancia;
        this.tempoViagem = tempoViagem;
    }
    return PontoVenda;
}());
var Itinerario = /** @class */ (function () {
    function Itinerario() {
        this.pontoAtual = null;
    }
    Itinerario.prototype.adicionarPontoVenda = function (local, distancia, tempoViagem) {
        var novoPontoVenda = new PontoVenda(local, undefined, undefined, distancia, tempoViagem);
        if (this.pontoAtual) {
            novoPontoVenda.pontoAnterior = this.pontoAtual;
            this.pontoAtual.pontoPosterior = novoPontoVenda;
        }
        this.pontoAtual = novoPontoVenda;
    };
    Itinerario.prototype.getRecursive = function (atribute) {
    };
    Itinerario.prototype.calcularDistanciaTotal = function () {
        if (this.pontoAtual) {
            var distancia = 0;
            var current = this.pontoAtual;
            while (current) {
                distancia += current.distancia;
                current = current.pontoAnterior;
            }
            return distancia;
        }
        else {
            return 0;
        }
    };
    Itinerario.prototype.calcularTempoTotal = function () {
        if (this.pontoAtual) {
            var tempoViagem = 0;
            var current = this.pontoAtual;
            while (current) {
                tempoViagem += current.tempoViagem;
                current = current.pontoAnterior;
            }
            return tempoViagem;
        }
        else {
            return 0;
        }
    };
    return Itinerario;
}());
var itinerario = new Itinerario();
itinerario.adicionarPontoVenda("Local A", 10, 30);
itinerario.adicionarPontoVenda("Local B", 15, 45);
itinerario.adicionarPontoVenda("Local C", 20, 60);
itinerario.adicionarPontoVenda("Local D", 12, 35);
itinerario.adicionarPontoVenda("Local E", 18, 50);
var distanciaTotal = itinerario.calcularDistanciaTotal();
var tempoTotal = itinerario.calcularTempoTotal();
console.log("Distância total percorrida:", distanciaTotal);
console.log("Tempo total gasto:", tempoTotal);
