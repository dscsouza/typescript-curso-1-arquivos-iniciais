export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // para evitar a alteração da data por algum dev desavisado,
        // criamos uma nova variável data e retornamos ela
        //caso alguém altere, vai estar alterando apenas a cópia
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
}
