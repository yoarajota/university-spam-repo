export class Celula {
    private _proxima: Celula | null;
    private _anterior: Celula | null;
    private _elemento: object;

    public constructor(proxima: Celula | null, _anterior: Celula | null, elemento: object) {
        this._proxima = proxima;
        this._anterior = proxima;
        this._elemento = elemento;
    }
    public setProxima(proxima: Celula | null): void {
        this._proxima = proxima;
    }
    public getProxima(): Celula | null {
        return this._proxima;
    }
    public getElemento(): Object {
        return this._elemento;
    }
    public setAnterior(anterior: Celula): void {
        this._anterior = anterior;
    }
    public getAnterior(): Celula | null {
        return this._anterior;
    }
}