/*
    Falsy e Truthy

    Em casos onde valor booleano é obrigatório e não há um valor booleano, o JS transformará o tipo de outros valores em booleano

    Falsey
        Quando um valor é considerado false em contextos onde um valor booleano é obrigatório (condicionais e loops)
        Valores que trarão um false:
            0
            -0
            ""
            null
            undefined
            NaN
    
    Truthy
        Truthy é o inverso do falsy. Valores que trarão o truthy:
            {}
            []
            1
            3.23
            "0"
            "false"
            -1
            Infinity
            -Infinity
*/

// Aqui um valor booleano é obrigatório:
console.log(false ? 'verdadeiro' : 'falso');
// Logo, se não houver um valor booleano, outros vão ser considerados como false:
console.log(0 ? 'verdadeiro' : 'falso');
console.log(-0 ? 'verdadeiro' : 'falso');
console.log("" ? 'verdadeiro' : 'falso');
console.log(null ? 'verdadeiro' : 'falso');
console.log(undefined ? 'verdadeiro' : 'falso');
console.log(NaN ? 'verdadeiro' : 'falso');

console.log(true ? 'verdadeiro' : 'falso');
// Se não houver um valor booleano, outros vão ser considerados como true:
console.log({} ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso');
console.log(1 ? 'verdadeiro' : 'falso');
console.log(3.23 ? 'verdadeiro' : 'falso');
console.log("0" ? 'verdadeiro' : 'falso');
console.log("false" ? 'verdadeiro' : 'falso');
console.log(-1 ? 'verdadeiro' : 'falso');
console.log(Infinity ? 'verdadeiro' : 'falso');
console.log(-Infinity ? 'verdadeiro' : 'falso');
console.log(1995 ? 'verdadeiro' : 'falso');
console.log("Caio" ? 'verdadeiro' : 'falso');