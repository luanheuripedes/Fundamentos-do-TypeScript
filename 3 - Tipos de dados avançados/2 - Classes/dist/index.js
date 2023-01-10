"use strict";
// Classe é uma estrutura e o centro de POO
class Personagem {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    caminhar() {
        console.log(`${this.nome} caminhou`);
    }
    ;
}
let gandalf = new Personagem("Gandalf", "Mago");
gandalf.caminhar();
