/*
    Functions

    Evita repetição de código

    Agrupa um bloco de códigos para ser reutilizado

    Ao fazermos uma função, nós damos um significado para o bloco de códigos

    Guarda, armazena, um bloco de códigos para ser 'chamado' posteriormente, podemos também falar em executar a função, rodar, invocar. Em inglês fica execute, run, call, invoke

    O JS ao ler o código, chegará na função e armazenará (em memória) no nome da função function() o bloco de códigos lá contido. Assim, quando a função é chamada, o JS busca na memória o que precisa ser executado
*/

// Declaração da função ou Function Statement
function createPhrases() {
    console.log("Frase 1");
    console.log("Frase 2");
    console.log("Frase 3");
    console.log("Frase 4");
}

createPhrases();

// Outra forma de entendermos funções é pensarmos nela como um liquidificador:
function fazerSuco(fruta1, fruta2) {
    return `O suco é de ${fruta1} e ${fruta2}`;
}
// Precisamos de algum lugar para colcoar o suco:
const copo = fazerSuco('banana', 'maçã');
console.log(copo);