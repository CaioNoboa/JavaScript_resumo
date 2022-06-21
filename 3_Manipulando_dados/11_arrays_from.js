/*
    Manipulando Arrays

    Transformando uma cadeia de caracteres em elementos de um array

    O próprio Array, de Array.from() já é um objeto disponível (protótipo), daí conseguimos usar o from() para indicar o que queremos transformar em array. O from() espera receber String
*/

let word = "manipulação";
let myArray = Array.from(word);
console.log(myArray);
console.log(myArray.length);

let number = 123456789;
let mySecondArray = Array.from(String(number));
console.log(mySecondArray);
console.log(mySecondArray.length);