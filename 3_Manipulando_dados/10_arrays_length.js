/*
    Manipulando Arrays

    Contando elementos de um array
*/

let myArray = ['Caio', 'Maria', 'Joaquina'];
console.log(myArray.length); // 3

// Lembrando que podemos colocar qualquer coisa em um array:
let myArrayCrazy = [
    'Caio',
    'Maria',
    'Joaquina',
    {
        type: "Human",
        local: "Brasil",
    },
    function() {
        return "Alôu";
    },
];
console.log(myArrayCrazy.length); // 5

console.log(myArrayCrazy[3]); // { type: 'Human', local: 'Brasil' }
console.log(myArrayCrazy[3].type); // Human
console.log(myArrayCrazy[3].local); // Brasil

// Executando a função da array:
console.log(myArrayCrazy[4]()); // Alôu