/*
    JS em si é uma linguagem fracamente tipada
        Ao declararmos a variável não precisamos indicar o tipo da variável, igual precisamos fazer em outras linguagens (fortemente tipadas)
    
    JS é uma linguagem dinâmica
        Uma variável declarada let clima pode receber uma valor String "Clima Quente" e, em outro momento, podemos reatribuir valor para um tipo number, isso não é permitido em outras linguagens (estáticas)

    Para verificarmos o tipo de uma variável basta fazermos, por exemplo:
        console.log(typeof clima)
*/
let system = "Windows";
system = true;
system = 20;
console.log(typeof system);