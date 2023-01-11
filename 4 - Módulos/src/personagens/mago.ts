import { TipoPersonagem as Tipo } from "../enums/tipo-personagem";
import { Personagem } from "./personagem";

export class Mago extends Personagem{
    
    constructor(nome:string){
        super(nome, Tipo.Mago);
    }

    atacar(): void {
        console.log(`${this.nome} atacou usando magia. `);
    }

}