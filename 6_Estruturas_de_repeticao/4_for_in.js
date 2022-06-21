/*
    For...in

    Cria um loop para pegar as propriedades de um objeto

    Serve para objetos
*/

let person = {
    name: 'Caio',
    age: 27,
    weight: 88,
}

for(let propriedades in person) {
    console.log(propriedades) // só nos mostra a propriedade
    console.log(person[propriedades]); // nos mostra o valor da propriedade
}