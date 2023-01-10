"use strict";
function caminhar(movimento) {
    console.log(`O personagem caminhou ${movimento.passos} passos para ${movimento.direcao}`);
}
caminhar({ direcao: "cima", passos: 6 });
caminhar({ direcao: "baixo", passos: 10 });
/*
function caminhar(direcao: Direcao, passos: number){
    console.log(`O personagem caminhou ${passos} passos para ${direcao}`);
}

caminhar("cima", 5);
caminhar("baixo", 4);
caminhar("esquerda", 8);
*/
