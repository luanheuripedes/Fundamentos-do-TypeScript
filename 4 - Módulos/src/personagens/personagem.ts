import { TipoPersonagem } from "../enums/tipo-personagem";

 abstract class Personagem{
    nome:string;
    tipo:TipoPersonagem

    constructor(nome:string, tipo:TipoPersonagem){
        this.nome = nome;
        this.tipo = tipo;
    }

    caminhar(){
        console.log(`${this.nome} caminhou. `);
    }

    abstract atacar():void;
}

const VIDA_MAXIMA = 100;
export{Personagem, VIDA_MAXIMA};

//export{Personagem, VIDA_MAXIMA as VIDA_MAX};