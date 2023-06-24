import { Musicas } from "./Musicas";

export class playlist {
    private _primeira: Musicas;
    private _ultima: Musicas;
    public _totalDeElementos: number = 0;
    public _atual: Musicas;

    constructor() {
    }

    public a(newMusic: Musicas): void { // Adiciona no começo
        if (this._totalDeElementos != 0) {
            this._primeira?.setAnterior(newMusic);
            newMusic?.setProxima(this._primeira);
        }
        else {
            this._atual = newMusic; // TEMP
            this._ultima = newMusic;
        }

        this._primeira = newMusic;
        this._totalDeElementos++;
    }

    public f(newMusic: Musicas): void { // Adiciona no fim
        if (this._totalDeElementos == 0) {
            this.a(newMusic);
        } else {
            this._ultima?.setProxima(newMusic);
            newMusic.setAnterior(this._ultima);
            this._ultima = newMusic;
            this._totalDeElementos++;
        }
    }

    private o(posicao: number): boolean { // Posição ocupada
        return posicao >= 0 && posicao < this._totalDeElementos;
    }

    private p(posicao: number): Musicas { // Pega
        if (!this.o(posicao)) {
            throw ("Posição não existe");
        }
        let atual: any = this._primeira;
        for (let i: number = 0; i < posicao; i++) {
            atual = atual?.getProxima();
        }
        return atual;
    }

    adicionar(position: number, newMusic: Musicas) {
        if (position == 0) {
            this.a(newMusic);
        } else if (position == this._totalDeElementos) {
            this.f(newMusic);
        } else {
            if (this.p(position - 1) && this.p(position)) {
                newMusic.setAnterior(this.p(position - 1))
                newMusic.setProxima(this.p(position))
                this.p(position - 1)?.setProxima(newMusic);
                this.p(position)?.setAnterior(newMusic);
                this._totalDeElementos++;
            }

        }
    }

    public removeDoComeco(): void {
        if (!this.o(0)) {
            throw new Error("Posição não existe");
        }
        this._primeira = this._primeira?.getProxima();
        this._totalDeElementos--;
        if (this._totalDeElementos == 0) {
            this._ultima = null;
        }
    }

    public removeDoFim(): void {
        if (!this.o(this._totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }
        if (this._totalDeElementos == 1) {
            this.removeDoComeco();
        } else {
            let penultima: Musicas = this?.p(this._totalDeElementos - 2);
            penultima?.setProxima(null);
            if (penultima) {
                this._ultima = penultima;
                this._totalDeElementos--;
            }
        }
    }

    remover(position: number) {
        if (!this.o(position)) {
            throw new Error("Posição não existe");
        }
        if (position == 0) {
            this.removeDoComeco();
        } else if (position == this._totalDeElementos - 1) {
            this.removeDoFim();
        } else {
            let anterior: Musicas = this.p(position - 1);
            let atual: Musicas = anterior.getProxima();
            let proxima: Musicas = atual.getProxima();
            anterior.setProxima(proxima);
            this._totalDeElementos--;
        }
    }

    tocar() {
        return this._atual?.getNome();
    }

    // * proxima: retorna o nome da próxima música a ser tocada e avança a posição na lista;
    proxima(): string {
        if (this._atual.getProxima()) {
            this._atual = this._atual.getProxima();
        }

        return this._atual.getNome();
    }

    // * anterior: retorna o nome da música anterior a e retorna uma posição na lista;
    anterior() {
        if (this._atual.getAnterior()) {
            this._atual = this._atual.getAnterior();
        }

        return this._atual.getNome();
    }

    listarMusicas() {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return "[]";
        }

        let str = ""
        let atual: Musicas = this._primeira;
        // Percorrendo até o penúltimo elemento.
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            str+= "[";
            str += atual?.getNome();
            atual = atual?.getProxima();
            str += "]";
            if (atual) {
                str += ",";
            }
        }
        str+= "[";
        str += atual?.getNome();
        str += "]";
        return str;
    }

    tempoTotal() {
        // Verificando se a Lista está vazia
        if (this._totalDeElementos == 0) {
            return 0;
        }
        let atual: Musicas = this._primeira;
        let total = 0;
        // Percorrendo até o penúltimo elemento.
        for (let i: number = 0; i < this._totalDeElementos - 1; i++) {
            total += atual?.getTamanho();
            atual = atual?.getProxima();
        }
        // último elemento
        total += atual?.getTamanho();
        return total;
    }
}