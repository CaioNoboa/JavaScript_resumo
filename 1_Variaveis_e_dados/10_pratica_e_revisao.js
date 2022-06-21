// declaration
var name;

// assignment (atribuição de valor)
name = "Caio";

// verificando tipo
console.log(typeof name);

// posso declarar separadamente
let age = 20;
let isHuman = true;
// ou dessa maneira (agrupamento de declarações):
let ages, isItHuman;
ages = 25;
isItHuman = false;

// Passando múltiplos argumentos para a função log:
console.log(name, age, isHuman);

// concatenação:
console.log("O " + name + " tem " + age + " anos");

// interpolação:
console.log(`O ${name} tem ${age} anos`);