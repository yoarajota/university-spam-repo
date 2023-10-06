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
  pontoAtual: PontoVenda | null;

  constructor() {
    this.pontoAtual = null;
  }

  adicionarPontoVenda(local: string, distancia: number, tempoViagem: number) {
    const novoPontoVenda = new PontoVenda(
      local,
      undefined,
      undefined,
      distancia,
      tempoViagem
    );
    if (this.pontoAtual) {
      novoPontoVenda.pontoAnterior = this.pontoAtual;
      this.pontoAtual.pontoPosterior = novoPontoVenda;
    }

    this.pontoAtual = novoPontoVenda;
  }

  getRecursive(atribute: string) {
  }

  calcularDistanciaTotal() {
    if (this.pontoAtual) {
      let distancia = 0;

      let current: PontoVenda | undefined = this.pontoAtual;
      while (current) {
        distancia += current.distancia;
        current = current.pontoAnterior
      }

      return distancia;
    } else {
      return 0;
    }
  }

  calcularTempoTotal() {
    if (this.pontoAtual) {
      let tempoViagem = 0;

      let current: PontoVenda | undefined = this.pontoAtual;
      while (current) {
        tempoViagem += current.tempoViagem;
        current = current.pontoAnterior
      }

      return tempoViagem;
    } else {
      return 0;
    }
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
