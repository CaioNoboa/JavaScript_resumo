/*
    Podemos declarar funções dentro de variáveis
    
    Neste caso a função é anônima, não tem nome. em inglês é function expression ou function anonymous
    
    Dentro dos () passaremos os parâmetros da função (parameters)
*/
const sum = function(number1, number2) {
    soma = number1 + number2;
    console.log(soma);
}

// Ao chamarmos a variável passamos os argumentos (arguments). São argumentos de uma função executada.
sum(2, 3);
sum(5, 7);
sum(10, 20);

function somarNumeros(number1, number2) {
    console.log(number1 + number2);
}
somarNumeros(2, 3);
somarNumeros(5, 7);
somarNumeros(10, 20);

// Os parâmetros number1 e number2 apenas 'existem' dentro do escopo das funções. Dessa forma, podemos fazer o seguinte:
let number1 = 5;
let number2 = 10;
// O number1 e number2 declarados acima não são os mesmos dos parâmetros das funções declaradas. Podemos utilizar essas variáveis como argumentos:
sum(number1, number2);
somarNumeros(number1, number2);

// interpolação
    // Aqui acontece algo interessante, aparece 'A soma dos números 5 e 10 é undefined'
    console.log(`A soma dos números ${number1} e ${number2} é ${sum(number1, number2)}`);
    // Aparece undefined pq a função está imprimindo algo (console.log()), mas não está retornando nada
    function somarComReturn(number1, number2) {
        return number1 + number2;
    }
    console.log(`A soma dos números ${number1} e ${number2} é ${somarComReturn(number1, number2)}`);
    // Agora sim aparece 'A soma dos números 5 e 10 é 15'

// Veja a função a seguir
const somar = function(number1, number2) {
    total = number1 + number2;
    return total;
}
// console.log(total);
somar(20, 20);
console.log(total);
// Apesar de total estar dentro do escopo da função, nós conseguimos acessá-lo por termos chamado a função e indicado os elementos e também pq não colocamos alguma palavra reservada. Caso coloquemos console.log(total); antes de chamar a função, dará erro: ReferenceError: total is not defined
// Se colocar var, let ou const, não conseguiremos acessar fora do escopo da função:
const somarDoisNumeros = function(number1, number2) {
    var totalDaSoma = number1 + number2;
    return totalDaSoma;
}
somarDoisNumeros(20, 20);
// console.log(totalDaSoma);
/*  Agora dá erro: ReferenceError: totalDaSoma is not defined
    
    No escopo de uma função var também fica isolado.

    Dessa forma, não devemos criar variáveis sem colocar palavras reservadas para elas, podemos causar problemas.
    A preferência geral é usar let, pois var trará problemas em outras situações também
*/