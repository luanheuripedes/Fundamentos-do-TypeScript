"use strict";
/*
function exibirMensagem(){
    console.log('Ola!');
}

exibirMensagem();
*/
// Parametros de entrada
/*
function exibirMensagem(mensagem: string, nome:string){
    console.log(mensagem + nome);
}

exibirMensagem('Parametro de entrada ', 'Luan');
*/
// Retorno das funções
function calcularNovoPreco(precoOriginal, taxaReajuste) {
    let novoPreco = precoOriginal * (1 + taxaReajuste / 100);
    return novoPreco;
}
let precoAjustado = calcularNovoPreco(100, -50);
console.log(precoAjustado);
