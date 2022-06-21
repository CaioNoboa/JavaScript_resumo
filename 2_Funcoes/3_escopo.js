/*
    Function Scope
*/

// Declarando uma variável
let subject = 'Pensamento 1'

function createThink(subject) {
    subject = 'Pensamento 2';
    return subject;
}

console.log(subject);
console.log(createThink(subject));
/*
    O resultado que sai aqui é:
        Pensamento 1
        Pensamento 2
    
    A variável subject não tem nada a ver com o parâmetro subject, são coisas diferentes

    O escopo de uma função, mesmo tendo parâmetro com mesmo nome de alguma variável declarada anteriormente, não é influenciada por essa outra variável

    Mas se não passarmos parâmetro para a função, daí acontece algo diferente:
*/
let subject2 = 'Pensamento 3';

function createThink2() {
    subject2 = 'Pensamento 4';
    return subject2;
}

console.log(createThink2(subject2));
console.log(subject2);
/*
    A resposta é:
        Pensamento 4
        Pensamento 4
    
    Como não passamos parâmetro, ao colcoarmos subject2 = 'Pensamento 4'; nós sobreescrevemos o valor da variável declarada fora da função.

    Se colocarmos:
        console.log(subject2);
        console.log(createThink2(subject2));
    Ficará
        Pensamento 3
        Pensamento 4
    Pois o valor será reatribuído apenas quando a função for chamada:
*/
let pensamento;

function createThink3() {
    pensamento = 'Pensamento 5';
    return pensamento;
}

console.log(pensamento);
console.log(createThink3());
console.log(pensamento);
/*
    Aqui fica:
        undefined
        Pensamento 5
        Pensamento 5
*/