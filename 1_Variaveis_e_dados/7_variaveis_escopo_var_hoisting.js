/*
    Scope ou escopo determina a visibilidade de alguma variável no JS

    Podemos entender que há um escopo global, que seria todo o código e escopos locais, que são delimitados por {}
    São chamados de block statement ou declaração de bloco e criarão um novo escopo (ou block-scoped)
    {
        códigos...
    }

    Abaixo usaremos escopos para explicar o Hoisting
*/

// faremos alguns exemplos para mostrar alguns comportamentos do JS com a var, chamado hoisting (ou elevação)
{
    var x = 0;
    console.log(x);
}

// O var é global e poderá funcionar fora de um escopo de bloco:
{
    var y = 0;
}
console.log(`Existe y depois do escopo de bloco? y = ${y}`);

// Aqui o resultado será 'Existe w antes do escopo de bloco? w = undefined'
console.log(`Existe w antes do escopo de bloco? w = ${w}`);
{
    var w = 0;
}

/*
    Aqui o resultado será:
    Existe z antes do escopo de bloco? z = undefined
    Existe z depois do escopo de bloco? z = 0
*/ 
console.log(`Existe z antes do escopo de bloco? z = ${z}`);
{
    var z = 0;
}
console.log(`Existe z depois do escopo de bloco? z = ${z}`);

/*
    Hoisting
        O que acontece é que o JS trará as var's para cima, é como se ele fizesse isso:    
            var z        
            console.log(`Existe z antes do escopo de bloco? z = ${z}`);
            {
                var z = 0;
            }
        Como var é global, o JS verá que foi declarada já de início. Mas não lê a atribuição '= 0'.
        Dessa forma, var z está declarada, não dá erro, mas é uma variável undefined
        Essa 'elevação' se chama hoisting
*/