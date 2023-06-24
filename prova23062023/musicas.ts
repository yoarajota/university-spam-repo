export class Musicas {
    private _proxima: Musicas;
    private _anterior: Musicas;
    private nome: string;
    private tamanho: number;

    public constructor(nome: string, tamanho: number = 0) {
        if (tamanho) {
            this.tamanho = tamanho;
        }
        this.nome = nome;
    }

    public setProxima(proxima: Musicas): void {
        this._proxima = proxima;
    }
    public getProxima(): Musicas {
        return this._proxima;
    }
    public getNome(): string {
        return this.nome;
    }
    public getTamanho(): number {
        return this.tamanho;
    }
    public setAnterior(anterior: Musicas): void {
        console.log("deu set")
        this._anterior = anterior;
    }
    public getAnterior(): Musicas {
        return this._anterior;
    }
}