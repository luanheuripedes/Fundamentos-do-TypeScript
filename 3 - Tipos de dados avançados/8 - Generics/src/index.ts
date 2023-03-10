abstract class OpcaoMenu{
    imprimir(){
        console.log(this);
    }
}
class Personagem extends OpcaoMenu{
    nome:string;
    constructor(nome:string){
        super();
        this.nome = nome;
    }

    imprimir(){
        console.log(`Classe personagem: ${this.nome}`);
    }
}

class Armamento{

}

class Mapa{
    clima:string;
    constructor(clima:string){
        this.clima = clima;
    }
}

class Menu<T extends OpcaoMenu>{
    private opcoes: T[] = [];

    adicionarOpcao(opcao: T){
        this.opcoes.push(opcao);
    }

    imprimirOpcoes(){
        this.opcoes.forEach(opcao => console.log(opcao.imprimir()));
    }
}

let p1 = new Personagem('Lucas');
let p2 = new Personagem('Lixo');

let m1 = new Mapa('Deserto');
let m2 = new Mapa('Gelo');

let menu = new Menu<Personagem>();

menu.adicionarOpcao(p1);
menu.adicionarOpcao(p2);

menu.imprimirOpcoes();