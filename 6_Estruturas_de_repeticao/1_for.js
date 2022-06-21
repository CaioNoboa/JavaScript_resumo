/*
    For - estrutura de repetição

    Estrutura
    for(inicialização de uma variável; condição de continuação do loop; expressão final que acontecerá assim que acabar o loop) {
        Códigos

        if(condição){
            break (para parar o código na condição)
        }

        if(condição){
            continue (para pular o código na condição)
        }
    }
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i--) {
    if (i === 50) {
        break; // por algum motivo quero parar a contagem em i === 50
    }
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    if (i === 5) {
        continue; // por algum motivo quero pular o 5
    }
    console.log(i);
}