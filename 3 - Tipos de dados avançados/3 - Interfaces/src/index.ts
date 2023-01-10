// Interfaces
interface Personamgem{
    nome:string;
    tipo:string;

    caminhar():void;
}

let p1:Personamgem;

p1={
    nome:'Gandalf',
    tipo:'Mago',
    caminhar:()=>{
        console.log('Caminhou');
    }
};

p1.caminhar();

class Mago implements Personamgem{
    nome: string;
    tipo: string;

    constructor(nome: string){
        this.nome = nome;
        this.tipo = 'Mago';
    }

    caminhar(): void {
        console.log(`O ${this.tipo} caminhou usando magia`);
    }

}

class Elfo implements Personamgem{
    nome: string;
    tipo: string;

    constructor(nome: string){
        this.nome = nome;
        this.tipo = 'Mago';
    }

    caminhar(): void {
        console.log(`O ${this.tipo} caminhou saltando`);
    }

}

let gandalf = new Mago('Gandalf');
gandalf.caminhar();

let player1:Personamgem;

player1 = new Mago('Gandalf');
player1.caminhar();
player1 = new Elfo('Legolas');
player1.caminhar();


