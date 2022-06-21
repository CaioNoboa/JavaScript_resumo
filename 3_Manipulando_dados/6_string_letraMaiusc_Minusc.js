/*
    Manipulando Strings

    Transformando letras minúsculas em maiúsculas e vice-versa.
*/

let texto = "Programar é daora, mas é difícil";
let gritaria = texto.toUpperCase();
console.log(gritaria);

let textoDoido = "PeGuei DA INTernEt UM TEXto DOidO"
let silenzio = textoDoido.toLowerCase();
console.log(silenzio);

let podemosAtrelarTudo = texto.toUpperCase().toLowerCase();
console.log(podemosAtrelarTudo);
let podemosAtrelarTudin = textoDoido.toLowerCase().toUpperCase();
console.log(podemosAtrelarTudin);