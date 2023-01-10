
//Tipo customizado
type Direcao = "cima" | "baixo" | "esquerda" | "direita";

// pode definir a forma do valor // A sintaxe é igual um objeto
type Movimento = {
    direcao:Direcao;
    passos:number;
}

/*
function caminhar(direcao: Direcao, passos: number){
    console.log(`O personagem caminhou ${passos} passos para ${direcao}`);
}

caminhar("cima", 5);
caminhar("baixo", 4);
caminhar("esquerda", 8);
*/


function caminhar(movimento:Movimento){
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}`);
}

caminhar({direcao:"cima", passos:6});
caminhar({direcao:"baixo", passos:10});


