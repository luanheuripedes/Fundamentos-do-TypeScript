"use strict";
//type TipoPersonagem = "Mago" | "Elfo";
var TipoPersonagem;
(function (TipoPersonagem) {
    TipoPersonagem[TipoPersonagem["Mago"] = 100] = "Mago";
    TipoPersonagem["Elfo"] = "Elfo";
})(TipoPersonagem || (TipoPersonagem = {}));
class Personagem {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    caminhar() {
        console.log(`${this.nome} Caminhou`);
    }
}
class Mago extends Personagem {
    constructor(nome) {
        super(nome, TipoPersonagem.Mago);
    }
    caminhar() {
        console.log(`${this.nome} voou`);
    }
    atacar() {
        console.log(`${this.nome} atacou com magia`);
    }
}
class Elfo extends Personagem {
    constructor(nome) {
        super(nome, TipoPersonagem.Elfo);
    }
    atacar() {
        console.log(`${this.nome} atacou com arco e flecha`);
    }
}
let p1 = new Mago('Saruman');
let p2 = new Elfo('Elrond');
console.log(p1);
console.log(p2);
p1.caminhar();
p2.caminhar();
p1.atacar();
p2.atacar();
