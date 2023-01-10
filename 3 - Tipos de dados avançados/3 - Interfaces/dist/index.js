"use strict";
let p1;
p1 = {
    nome: 'Gandalf',
    tipo: 'Mago',
    caminhar: () => {
        console.log('Caminhou');
    }
};
p1.caminhar();
class Mago {
    constructor(nome) {
        this.nome = nome;
        this.tipo = 'Mago';
    }
    caminhar() {
        console.log(`O ${this.tipo} caminhou usando magia`);
    }
}
let gandalf = new Mago('Gandalf');
gandalf.caminhar();
