/*
    Operator precedence (precedência de operadores)

    ()              grouping
    ! ++ --         negação e incremento
    * /             multiplicação e divisão
    + -             adição e subtração
    < <= > >=       relacional
    == != === !==   igualdade
    &&              and
    ||              or
    ?:              condicional
    = += -= *=      assignment (atribuição)
*/

console.log(3 > 2 > 1);
// Dá falso, pois 3 > 2 é true, mas true > 1 é false
console.log(3 > 2 && 2 > 1); // true, pois os relacionais vem primeiro e depois &&
console.log(3 > 2 == 1); // true
// Pois:
console.log(true == 1); // true
console.log(true === 1); // false