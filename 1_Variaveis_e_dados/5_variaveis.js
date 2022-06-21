/*
    Variáveis
        Também chamadas de identifiers (identificadores)
        
        Servem para guardamos informações
        A variável nos possibilita abrir um espaço na memória do computador
        Dentro das variáveis podemos guardar todos os tipos de dados
        
        Ao atribuir valor a uma variável dizemos que estamos declarando uma variável. Na verdade, se apenas fizermos var nome, isso já é uma declaração, que no caso será undefined (sem atribuição de valor)

        Nomes simbólicos para receber algum valor
        Atalhos de código

        No JS temos 3 palavras reservadas para criar uma variável:
            var
            let
            const        
*/
var clima = "Quente";
clima = "Frio"; // reatribuímos valor à variável
console.log(clima);

let sabor = "Morango";
sabor = "Chocolate"; // com o let também conseguimos reatribuir valor
console.log(sabor);

// já com const se tentar reatribuir valor, dará erro. É uma constante, não mudará
const nome = "Caio";
// nome = "Kaio"; // aqui não acusará erro, apenas quando rodar (TypeError: Assignment to constant variable)
console.log(nome);