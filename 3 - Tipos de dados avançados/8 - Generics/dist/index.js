"use strict";
class OpcaoMenu {
    imprimir() {
        console.log(this);
    }
}
class Personagem extends OpcaoMenu {
    constructor(nome) {
        super();
        this.nome = nome;
    }
    imprimir() {
        console.log(`Classe personagem: ${this.nome}`);
    }
}
class Armamento {
}
class Mapa {
    constructor(clima) {
        this.clima = clima;
    }
}
class Menu {
    constructor() {
        this.opcoes = [];
    }
    adicionarOpcao(opcao) {
        this.opcoes.push(opcao);
    }
    imprimirOpcoes() {
        this.opcoes.forEach(opcao => console.log(opcao.imprimir()));
    }
}
let p1 = new Personagem('Lucas');
let p2 = new Personagem('Lixo');
let m1 = new Mapa('Deserto');
let m2 = new Mapa('Gelo');
let menu = new Menu();
menu.adicionarOpcao(p1);
menu.adicionarOpcao(p2);
menu.imprimirOpcoes();
