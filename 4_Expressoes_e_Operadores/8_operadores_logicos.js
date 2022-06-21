/*
    Operadores lógicos

    É a operação entre dois valores booleanos que, quando verificados, retornará booleano
    && - E - AND
    || - OU - OR
    ! - NEGAÇÃO - NOT
*/

let pao = true;
let leite = true;
let queijo = false;
let cereal = false;

console.log("&&");
// &&
console.log(pao && leite); // true
console.log(pao && queijo); // false
console.log(queijo && cereal); // false

console.log("||");
// ||
console.log(pao || leite); // true
console.log(pao || queijo); // true
console.log(queijo || cereal); // false

console.log("!");
// !
console.log(!pao); // era true agora é false
console.log(!leite); // era true agora é false
console.log(!queijo); // era false agora é true
console.log(!cereal); // era false agora é true