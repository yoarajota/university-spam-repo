import Usuario from "./Usuario";
import Pilha from "./pilha";

export default class Atendimento {
  private msgs: Pilha;
  private _atendente: Usuario;
  private _cliente: Usuario;
  private _protocolo: Date;

  public constructor() {
    this._protocolo = new Date();
    this.msgs = new Pilha();
  }

  public enviaMsgs(msg: string): void {
    this.msgs.empilhar(msg);
  }

  public mostraMsgs(): Array<string> {
    return this.msgs.elementos;
  }

  public setAtendente(at: Usuario): void {
    this._atendente = at;
  }

  public setCliente(cli: Usuario): void {
    this._cliente = cli;
  }
}
