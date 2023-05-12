export class Negociacao{

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ){}
    
    get data(): Date{
        // para evitar a alteração da data por algum dev desavisado,
        // criamos uma nova variável data e retornamos ela
        //caso alguém altere, vai estar alterando apenas a cópia
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number{
        return (this.quantidade * this.valor);
    }
}
