/*
    Temos algumas características a serem observadas
*/

// Situação 1
sayMyName();
function sayMyName() {
    console.log('Caio');
}
/*
    Resposta: Caio
    Neste caso, é como se o programa lesse a função antes de iniciar, daí mesmo que sayMyName(); esteja antes da função em si, funciona
*/

// Situação 2
sayMyAge();
let sayMyAge = function() {
    console.log(27);
}
/*
    Aqui temos o erro: ReferenceError: Cannot access 'sayMyAge' before initialization

    Como a função está sendo armazenada em uma variável, não está sofrendo o hoisting, portanto dá erro
*/

// Situação 3
sayMyWeight();
var sayMyWeight = function() {
    console.log(88);
}
/*
    Aqui temos o erro: TypeError: sayMyWeight is not a function
    Ao usarmos a palavra reservada var, que sofre o hoisting, var sayMyWeight passa a ser undefined e, ao tentarmos chamar como uma função sayMyWeight(); dá erro, pois não é função
*/

// Situação 4
sayMyHeight();
var sayMyHeight = function sayMyHeight() {
    console.log(173);
}
/*
    Mesmo sendo uma função nomeada e não anônima, continuamos com o mesmo erro da Situação 3
*/