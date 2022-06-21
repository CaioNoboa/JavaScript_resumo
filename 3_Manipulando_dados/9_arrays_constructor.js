/*
    Manipulando Arrays

    Criando Array com constructor
*/

// Do jeito normal:
let myArrayNormal = ['a', 'b', 'c'];
console.log(myArrayNormal);

let myArrayConstructor = new Array('a', 'b', 'c');
console.log(myArrayConstructor);

// Podemos criar uma array com as posições vazias, mas já informando quantas posições eu quero:
let myArrayVazia = new Array(10);
console.log(myArrayVazia); // [ <10 empty items> ]