/*
    Manipulando Arrays

    1. Adicionando um item no fim da array - push
    
    2. Adicionando um item no começo da array - unshift

    3. Removendo um item do fim da array - pop
    
    4. Removendo um item do começo da array - shift

    5. Pegando somente alguns elementos do array - slice - como argumentos indico a posição de início e a posição final (essa posição final não será considerada)

    6. Removendo 1 ou mais itens em qualquer posição do array - splice - falamos qual o index de início e quantos elementos queremos tirar (se colcoar console.log(techs.splice(0, 2)); vai retornar os elementos que foram retirados)

    7. Encontrando a posição de um elemento no array
*/

let techs = ["html", "css", "js", "flutter", "react"];

// 1. Adicionando um item no fim da array
techs.push("node.js");
console.log(techs);

// 2. Adicionando um item no começo da array
techs.unshift("dart")
console.log(techs);

// 3. Removendo um item do fim da array
techs.pop();
console.log(techs);

// 4. Removendo um item do começo da array
techs.shift();
console.log(techs);

// 5. Pegando somente alguns elementos do array
console.log(techs.slice(1, 4)); // pega o 1, 2 e 3
console.log(techs.slice(1, 3)); // pega o 1 e 2
console.log(techs.slice(1, 1)); // fica vazio []

// 6. Removendo 1 ou mais itens em qualquer posição do array
console.log("6");
console.log(techs);
// techs.splice(1, 1); // só tira o elemento da posição 1
console.log(techs); // aqui mostra a array sem o elemento que foi retirado
// console.log(techs.splice(0, 2)); // aqui mostra o elemento que foi retirado da posição 0 e 1 (o segundo valor informa quantos elementos queremos tirar)
// console.log(techs.splice(3, 2)); // aqui mostra o elemento que foi retirado da posição 3 e 4 (o segundo valor informa quantos elementos queremos tirar)

// 7. Encontrando a posição de um elemento no array
    // Vendo a posição do flutter
let posicaoNoArray = techs.indexOf("flutter");
console.log(posicaoNoArray);
// Podemos remover esse elemento:
techs.splice(posicaoNoArray, 1);
console.log(techs);