/*
    Expressões e Operadores

    Expressions (expressões) são qualquer linha de código que resolve algo. Exemplo:
        let number;
        let texto = "Olá";
    Expressões podem ou não terminar com ; no JS

    Operadores
        Binário - 2 valores com operador entre eles
        Unário - apenas um elemento
        Ternário - a partir de um booleano faz uma coisa ou outra
*/

// Exemplo de operador binário:
console.log(100 / 10);
console.log(200 + 20);
console.log(300 * 50);

let number = 1
// Exemplo de operador unário:
console.log(++number);
console.log(--number);
console.log(typeof number);

// Exemplo de operador ternário:
console.log(true? 'alô' : 'nada'); // se for true vai receber alô, se não, nada
console.log(false? 'alô' : 'nada'); // se for false vai receber nada, se não, alô

let nome = "Caio"
console.log(nome === "Caio" ? 'Meu nome' : 'Não é meu nome');
console.log(nome === "Maria" ? 'Meu nome' : 'Não é meu nome');