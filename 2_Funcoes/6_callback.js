/*
    Callback (chamar de volta) é chamar uma função dentro de outra função.
    Callback é quando uma função é passada como parâmetro para outra função.
    'Chame uma função e vou chamar outra função de volta'.
*/

// Neste exemplo o resultado é uma função
function sayMyName(name) {
    console.log(name)
}
// Podemos passar dados de qualquer tipo para name, inclusive função:
sayMyName(
    () => {
        console.log('Estou em uma callback');
    }
)

// Aqui o resultado já é o 'Estou em uma callback':
function sayMyAge(age) {
    age();
}
sayMyAge(
    () => {
        console.log('Estou em uma callback');
    }
)

// Outra forma:
function sayMyWeight(weight) {
    console.log('Antes de executar a função callback');

    weight();
    
    console.log('Depois de executar a função callback');
}

sayMyWeight(
    () => {
        console.log('Estou em uma callback');
    }
);
/*
    Seria a mesma coisa que fazer isso:

        function sayMyWeight() {
            console.log('Antes de executar a função callback');

            function name() {
                console.log('Estou em uma callback');
            }
            name();
            
            console.log('Depois de executar a função callback');
        }
        sayMyWeight();
*/