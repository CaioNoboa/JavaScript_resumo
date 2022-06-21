/*
    const e let são locais e só funcionam no escopo onde foram criadas

    A ordem também importará

    É por isso que tem sido muito mais comum usar let ao invés de var, pois var é muito flexível e acaba trazendo problemas
*/

// Dará erro: ReferenceError: x is not defined
// console.log(`Existe x antes do escopo de bloco? x = ${x}`);
{
    let x = 0;
}

// Também dará erro: ReferenceError: x is not defined
{
    let y = 0;
}
// console.log(`Existe y depois do escopo de bloco? y = ${y}`);

// Dará erro, mas um erro diferente. O programa sabe que existe w, mas não consegue acessar seu valor (ReferenceError: Cannot access 'w' before initialiwation)
{
    // console.log(`Existe w dentro do escopo, mas antes da atribuição de valor? w = ${w}`);
    let w = 0;
}

{
    let z = 0;
    console.log(`Existe z dentro do escopo e depois da atribuição de valor? z = ${z}`);
}

let texto = "Isso também funciona";
{
    let texto = "Mesmo nome de variável, mas não causará erro"
    console.log(`Este texto se refere à variável dentro do escopo = ${texto}`);
}
console.log(`Já este texto se refere à variável fora do escopo = ${texto}`);

// Contudo, se no segundo texto não colocarmos a palavra reservada let, ambos terão o mesmo valor, pois a variável dentro do escopo buscará o valor fora do escopo por não ter let e fora do escopo a variável ficará com esse novo valor:
let frase = "Essa frase não aparecerá"
{
    frase = "Reatribui valor à variável frase que foi declarada fora"
    console.log(`Eu terei o novo valor de frase, mas mesmo se frase não estivesse aqui dentro do escopo, eu conseguiria acessar, daí o valor seria o inicial = ${frase}`);
}
console.log(`Eu também terei o novo valor de frase = ${frase}`);

/*
    Const

    Com const não conseguimos reatribuir valor, mas podemos fazer const de mesmo nome, desde que estejam em escopos diferentes:
*/
const abcd = "abecedário";
{
    const abcd = "ABCD";
    console.log(abcd);
}
console.log(abcd);