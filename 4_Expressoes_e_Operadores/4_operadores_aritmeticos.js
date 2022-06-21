/*
    Operadores aritiméticos
*/

// multiplicação
console.log(10.4874848415121 * 5.18985132123121254);
console.log((10.4874848415121 * 5.18985132123121254).toFixed(2));

// divisão
console.log(10.4874848415121 / 5.18985132123121254);
console.log(5896843513513554 / 5948941241);

// soma
console.log(45 + 39);

// subtração
console.log(45 - 39);


console.log("resto da divisão");
// resto da divisão
console.log(10 % 2);
console.log(10 % 3);

let remainder // remainder é o resto em inglês
remainder = 11 % 3;
console.log(remainder);


console.log("incremento");
// incremento
let increment = 0;
increment++
console.log(increment);
increment++
console.log(increment);

    // Dentro do console.log a ordem do ++ importa
        // Se eu colocar antes, o programa lerá o valor já acrescido:
        console.log(++increment); // 3
        
        // Se eu colcoar depois, primeiro lerá o valor e depois acrescentará:
        console.log(increment++); // 3
        console.log(increment); // 4


console.log('decremento'); // 0
// decremento
let decrement = 0;

console.log(decrement--); // 0
console.log(decrement--); // -1
console.log(decrement); // -2
console.log(--decrement); // -3


console.log('exponencial');
// exponencial **
console.log(3 ** 3); // 27 (três elevado à terceira potência)
console.log(3 ** 2); // 9
console.log(2 ** 2); // 4
console.log(2 ** 10); // 1024