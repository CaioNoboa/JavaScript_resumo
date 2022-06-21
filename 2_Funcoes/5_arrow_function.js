// Ao invés de fazermos uma função normal, como essa:
const sayMyName = function() {
    console.log('Caio');
}

// Podemos fazer:
const sayMyAge = () => {
    console.log(27)
}
sayMyAge();

const sayMyWeight = (weight) => {
    console.log(weight)
}
sayMyWeight(88);