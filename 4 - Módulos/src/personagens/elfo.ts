import { TipoPersonagem } from "../enums/tipo-personagem";
import { Personagem, VIDA_MAXIMA } from "./personagem";

export class Elfo extends Personagem{
    vida:number;

    constructor(nome:string){
        super(nome,TipoPersonagem.Elfo);
        this.vida = VIDA_MAXIMA;
    }

    atacar(): void {
        console.log(`${this.nome} atacou com arco e flecha.`);
    }

}