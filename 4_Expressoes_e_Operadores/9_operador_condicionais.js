/*
    Operadore condicional (Ternário)

    Condição então valor1 se não valor2
    condição ? valor1 : valor2;

    O valor1 e valor2 podem ser qualquer coisa, funções e etc.
*/

let pao = true;
let leite = true;
let queijo = false;
let cereal = false;

const niceBreakfast = pao && leite ? "Café muito bom!" : "Méh";

console.log(niceBreakfast);

const greatBreakfast = cereal && leite ? "Amooooooo!" : "Ah, ta tudo bem :/";
console.log(greatBreakfast);

const okayBreakfast = pao || queijo ? "Beleza, tendo pelo menos um dos dois ta ótimo" : "Pouxa, não tem nenhum dos dois?";
console.log(okayBreakfast);

// Outro exemplo:
let age = 17;

const canDrive = age >= 18 ? "Pode tirar CNH" : "Vai sentar no banco do passageiro, se reclamar vai sentar atrás";

console.log(canDrive);