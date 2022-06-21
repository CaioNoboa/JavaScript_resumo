/*
    Operadores de comparação

    Compararemos valores e será retornado um Boolean

    == igual a

    != diferente de

    === estritamente igual a (vai comparar os valores e tipo dos elementos)

    !== estritamente diferente de (vai comparar os valores e tipo dos elementos)

    > maior que

    >= maior igual a

    < menor que

    <= menor igual a
*/

let one = 1; // one recebe o valor 1
let two = 2; // com um = falabos em atribuição de valor

// ==
console.log('igual a');
console.log(one == two);
console.log(one == two ? 'Os dois são iguais' : 'Os dois são diferentes');

// !=
console.log('diferente de');
console.log(one != two); // true
console.log(one != 1); // false

// ===
console.log('estritamente igual a');
console.log(one === "1"); // false
console.log(one === 1); // true

// !==
console.log('estritamente diferente de');
console.log(two !== "2"); // true
console.log(two !== 2); // false

console.log(("1" + 1) === 2 ? 'Somou!' : 'Concatenou!'); // false
console.log(("1" + 1) === "11" ? 'Concatenou!' : 'Somou!'); // true

// >
console.log('maior que');
console.log(one > two); // false

// >=
console.log('maior igual a');
console.log(one >= 1); // true
console.log(two >= 1); // true

// <>>
console.log('menor que');
console.log(two < one); // false

// <=
console.log('menor igual a');
console.log(one <= two); // true
console.log(one <= 1); // true
console.log(one <= 0); // false