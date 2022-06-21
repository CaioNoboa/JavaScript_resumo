/*
    Type conversion (ou typecasting) VS Type coersion

    Trata-se da alteração de um tipo de dado para outro tipo

    Type conversion - nós explicitamente alteramos o tipo do dado
    Type coersion - é o JS que faz essa alteração

    Exemplos:
*/

console.log("9" + 5); // 95, JS alterou um tipo number para tipo String
// O + serve para somar ou concatenar

// Agora vamos alterar o "9" para number:
console.log(Number("10") + 5); // 15