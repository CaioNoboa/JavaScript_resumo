/*
    Uma maneira de capturar erros para que toda a aplicação não pare. Dará erro, mas o erro sendo capturado, o programa continuará sendo executado

    throw (disparar, lançar)
        throw new Error - criamos um novo objeto do tipo Error

    try..catch (tentar...pegar)

    Tentaremos (try) um bloco de códigos e se um erro for disparado (throw), então podemos capturar (catch) esse erro
*/

function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é obrigatório")
    }
    console.log('Depois do erro')
    // return name
}
// console.log(sayMyName());
// Se chamamos a função fora do try catch, ao dar erro o programa para

// Quando lançamos um erro precisamos capturá-lo para que o programe não pare:
try {
    sayMyName()
} catch (error) {
    console.log(error)
}

console.log('Depois do erro!')
// Com o try catch dará erro, mas o programa continuará sendo executado, tanto que o código acima é executado