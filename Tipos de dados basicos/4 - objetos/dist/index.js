"use strict";
let cliente = {
    nome: 'Luan',
    email: 'luanheuripedesmoreiradepaula',
    saldo: 100,
    ativo: true
};
cliente = {
    nome: 'Carols',
    email: 'Carols',
    saldo: 100,
    ativo: true
};
//propriedades complexas
let produto = {
    codigo: 1,
    descricao: 'Arroz',
    categoria: {
        codigo: 10,
        descricao: 'Cereais'
    }
};
console.log(cliente);
console.log(produto);
