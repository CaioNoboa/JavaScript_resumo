/*
    Manipulando Strings

    Separando um texto, que contém espaços, em um novo array onde cada texto é uma posição do array.
    E transformando esse array em texto e onde eram espaços, trocando por _

    texto.split(" ") - como argumento informamos o que queremos usar para separar
*/

let texto = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia cumque fugit reprehenderit. Explicabo iure rem, eligendi quam hic voluptas quidem mollitia, esse, est perspiciatis quas minima illo vel? A, voluptatem?"

let arraySepararPorEspacos = texto.split(" ");
console.log(arraySepararPorEspacos);
// Vendo quantas palavras temos:
console.log(arraySepararPorEspacos.length);

let arraySepararPorLetra = texto.split("o");
console.log(arraySepararPorLetra);
// Vendo quantas palavras se formaram:
console.log(arraySepararPorLetra.length);

// Juntando as arrays:
let juntando = arraySepararPorEspacos.join("");
console.log(juntando);
let juntandoComUnderscore = arraySepararPorEspacos.join("_");
console.log(juntandoComUnderscore);
let juntandoComEspaco = arraySepararPorEspacos.join(" ");
console.log(juntandoComEspaco);

console.log(juntando.toUpperCase());