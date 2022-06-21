// Exercício 1
var weight;

// Exercício 2
console.log(typeof weight);

// Exercício 3
let nome, age, stars, isSubscribed;
nome = "Caio";
age = 27;
stars = 5.0;
isSubscribed = false;

// Exercício 4
let list = {};
console.log(typeof list);

list = {
    name: 'Paola',
    age: 35,
    stars: 4.5,
    isSubscribed: true,
}
console.log(`A ${list.name} tem ${list.age} anos de idade`);

// Exercício 5
let students = [];

// Exercício 6
students = [
    list,
]
console.log(students);

// Exercício 7
console.log(students[0]);

// Exercício 8
const otherStudent = {
    name: 'John',
    age: 28,
    stars: 4.7,
    isSubscribed: true,
}

// students = [
//     list,
//     otherStudent,
// ]

students[1] = otherStudent;

console.log(students);
console.log(students[0]);
console.log(students[1]);

// Exercício 9

    // A resposta do código abaixo é undefined, devido ao hoisting que ocorre com var
    console.log(a);
    var a = 1;