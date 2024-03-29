import Usuario from "./Usuario";
import Atendimento from "./atendimento";
import Fila from "./fila";

export default class TesteAtendimento {
  s() {
    const filaCliente = new Fila();

    let c1 = new Usuario();
    let c2 = new Usuario();
    let c3 = new Usuario();

    filaCliente.enfileirar(c1);
    filaCliente.enfileirar(c2);
    filaCliente.enfileirar(c3);

    const filaAtendente = new Fila();
    let a1 = new Usuario();
    let a2 = new Usuario();

    filaAtendente.enfileirar(a1);
    filaAtendente.enfileirar(a2);

    let total = filaCliente.getTamanho();
    for (let c = 0; c < total; c++) {
      let at = new Atendimento();
      const atendente = filaAtendente.desenfileirar();
      at.setCliente(filaCliente.desenfileirar());
      at.setAtendente(atendente);
      at.enviaMsgs("Olá! Seja bem vindo ao nosso atendimento");
      at.enviaMsgs("O número do protocolo desse atendimento é XXXXXXX");
      at.enviaMsgs("Como posso lhe ajudar?");
      at.enviaMsgs("Não preciso mais atendimento");

      filaAtendente.enfileirar(atendente);
      console.log(at.mostraMsgs());
    }
  }
}

new TesteAtendimento().s();
