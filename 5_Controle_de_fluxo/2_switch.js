/*
    Switch

    Estrutura:
        switch(expression) {
            case 'a':
                Códigos
                break (para sinalizar que o caso a acabou)
            case 'b':
                Códigos
                break
            default: (se não entrar em nenhum caso, vem para o default (pré-definido))
                Códigos
                break
        }
*/

let expression = 'a';

switch (expression) {
    case 'a':
        console.log('Veio pro caso a')
        break;
    case 'b':
        console.log('Veio pro caso b')
        break;
    default:
        console.log('Entrou em caso nenhum')
        break;
}

// Outro exemplo

function calculate(number1, operator, number2) {
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2
            break;            
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break;
    }
    return result;
}

console.log(calculate(15, '+', 5));
console.log(calculate(15, '-', 5));
console.log(calculate(15, '*', 5));
console.log(calculate(15, '/', 5));
console.log(calculate(15, '%', 5));