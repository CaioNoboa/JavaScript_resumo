/*
    Manipulando Strings e Números

    Transformando um número decimal com 2 casas demais e trocar ponto por vírgula

    number.toFixed() - quando temos uma função atrelada a um objeto chamamos de método. Esse método transforma em String 

    number.replace(".", ",") - no método replace usaremos como argumentos primeiro o que queremos trocar e depois pelo o que queremos trocar
*/
let number = 4.17584451212121231547878798797897987987987987897841541213213213213213213213213;
console.log(number.toFixed(2));
console.log(number.toFixed(10));
console.log(Number(number.toFixed(10)));

// Trocando o . por ,
console.log(number.toFixed(10).replace(".", ","));
console.log(number.toFixed(2).replace(".", ","));
console.log(String(number).replace(".", ","));

// Se tentarmos trasnformar para número:
console.log(Number(number.toFixed(2).replace(".", ",")));
// Obteremos NaN, pois , não faz parte de número para JS (para programação em geral)