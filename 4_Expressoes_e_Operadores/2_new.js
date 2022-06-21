/*
    new (ou left-hand-side expression)
    criar um novo objeto
*/

let nome = new String('Caio');
nome.sobrenome = 'Noboa';
nome.nomeCompleto = 'Caio Salvador Noboa';
let age = new Number(27);
console.log(nome, age); // [String: 'Caio'] {sobrenome: 'Noboa', nomeCompleto: 'Caio Salvador Noboa'} [Number: 27]
console.log(nome.nomeCompleto, age); // [String: 'Caio'] [Number: 27]
console.log(`${nome.sobrenome}, ${nome}. ${age} anos`); // [String: 'Caio'] [Number: 27]

// como criamos um novo objeto new String('Caio'), nós conseguimos categorizar conforme o que já temos pré-definido no JS

let date = new Date('2022-05-30');
console.log(date);
// console.log(date.__proto__); // Como date que criamos é sim um objeto, no console do navegador conseguimos ver suas propriedades