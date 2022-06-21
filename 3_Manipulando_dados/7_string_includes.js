/*
    Manipulando Strings

    Verificando se o texto contém alguma palavra específica

    texto.includes() gera um dado booleano, apenas conseguimos saber se aquela palavra existe ou não em detgerminado texto
    É case-sensitive, ou seja, letras maiúsculas e minúsculas importam
*/

let texto = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia cumque fugit reprehenderit. Explicabo iure rem, eligendi quam hic voluptas quidem mollitia, esse, est perspiciatis quas minima illo vel? A, voluptatem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia cumque fugit reprehenderit. Explicabo iure rem, eligendi quam hic voluptas quidem mollitia, esse, est perspiciatis quas minima illo vel? A, voluptatem?"

let temAmor = texto.includes("Amor");
console.log(temAmor); // false

let temLorem = texto.includes("Lorem");
console.log(temLorem); // true

// Case-sensitive:
let temlorem = texto.includes("lorem");
console.log(temlorem); // false