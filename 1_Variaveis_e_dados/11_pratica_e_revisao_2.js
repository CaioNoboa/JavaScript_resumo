// Object
const person = {
    name: 'Caio',
    age: 26,
    weight: 88,
    isAdmin: true,
}

console.log(person);

// acessando valores dentro do object:
console.log(person.name);
console.log(person.age);
console.log(person.weight);
console.log(person.isAdmin);
console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg`);

// Arrays
const animals = [
    'Lion',
    'Monkey',
    'Cat',
    'Dog',
]

console.log(animals);

// acessando valores dentro do array:
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);

// podemos também acessar informações da array. A forma com que fazemos isso é como se estivessemos acessando propriedades de um objeto:
console.log(animals.length);

// Podemos colocar object dentro de um array:
const pet = [
    {
        type: 'Cat',
        age: 3,
    },
    {
        type: 'Dog',
        age: 1,
    },
]
console.log(pet[0]);

// Acessando informações do objeto dentro da array:
console.log(pet[0].type);
console.log(pet[0].age);
console.log(`O pet do tipo ${pet[1].type} tem ${pet[1].age} ano(s)`);