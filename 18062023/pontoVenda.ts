class PontoVenda {
  local: string;
  pontoAnterior?: PontoVenda;
  pontoPosterior?: PontoVenda;
  distancia: number;
  tempoViagem: number;

  constructor(
    local: string,
    pontoAnterior?: PontoVenda,
    pontoPosterior?: PontoVenda,
    distancia: number = 0,
    tempoViagem: number = 0
  ) {
    this.local = local;
    this.pontoAnterior = pontoAnterior;
    this.pontoPosterior = pontoPosterior;
    this.distancia = distancia;
    this.tempoViagem = tempoViagem;
  }
}

class Itinerario {
  pontosVenda: PontoVenda[];

  constructor() {
    this.pontosVenda = [];
  }

  adicionarPontoVenda(local: string, distancia: number, tempoViagem: number) {
    const novoPontoVenda = new PontoVenda(
      local,
      undefined,
      undefined,
      distancia,
      tempoViagem
    );
    const ultimoPontoVenda = this.pontosVenda[this.pontosVenda.length - 1];

    if (ultimoPontoVenda) {
      novoPontoVenda.pontoAnterior = ultimoPontoVenda;
      ultimoPontoVenda.pontoPosterior = novoPontoVenda;
    }

    this.pontosVenda.push(novoPontoVenda);
  }

  calcularDistanciaTotal() {
    let distanciaTotal = 0;

    for (const pontoVenda of this.pontosVenda) {
      distanciaTotal += pontoVenda.distancia;
    }

    return distanciaTotal;
  }

  calcularTempoTotal() {
    let tempoTotal = 0;

    for (const pontoVenda of this.pontosVenda) {
      tempoTotal += pontoVenda.tempoViagem;
    }

    return tempoTotal;
  }
}

const itinerario = new Itinerario();
itinerario.adicionarPontoVenda("Local A", 10, 30);
itinerario.adicionarPontoVenda("Local B", 15, 45);
itinerario.adicionarPontoVenda("Local C", 20, 60);
itinerario.adicionarPontoVenda("Local D", 12, 35);
itinerario.adicionarPontoVenda("Local E", 18, 50);
const distanciaTotal = itinerario.calcularDistanciaTotal();
const tempoTotal = itinerario.calcularTempoTotal();

console.log("Distância total percorrida:", distanciaTotal);
console.log("Tempo total gasto:", tempoTotal);
