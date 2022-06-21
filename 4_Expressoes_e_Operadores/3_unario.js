/*
    Operadores unários:
        typeof
        delete
*/

const pessoa = {
    nome: 'Caio',
    age: 27,
    weight: 88,
}
console.log(typeof pessoa);

// Conseguimos deletar uma propriedade do objeto pessoa:
delete pessoa.weight;
console.log(pessoa);