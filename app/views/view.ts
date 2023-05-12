export abstract class View<T>{

    protected elemento: HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T):void{
        const template = this.template(model);
        this.elemento.innerHTML = template;

    }

    // método abstrato, ou seja, deve ser implementado pela classe filha
    //obrigatoriamente e o erro acontece em desenvolvimento
    //
    abstract template(model:T): string;

}