/*
    Function constructo (função construtora)

    No JS não existe classe, mas sim funções construtoras
    Assim como em classes, é de boa prática o nome começar com letra maiúscula

    Serve para criarmos novos objetos

    Para instanciar um novo objeto precisamos utilizar a expressão new

    Se fizermos:
        function Person() {}
        const caio = new Person();
        console.log(caio);
        Como resultado teremos um objeto do tipo Person (Person {})
*/

function Person(name) {
    this.name = name
    this.estaAndando = function() {
        return name + " está andando!"
    }
}

// Instanciando (criando) novos objetos:
const caio = new Person("Caio");
const gus = new Person("Gustavo")
// Como caio e gus estão usando da mesma função construtora, terão os mesmos atributos e funcionalidades
console.log(caio.estaAndando());
console.log(gus.estaAndando());

console.log(caio) // Person { name: 'Caio', estaAndando: [Function (anonymous)] }
console.log(caio.name)
console.log(caio.estaAndando())

// Existem vários tipos de funções construtoras, até let name = "Mayk" vem do seguinte:
let name = new String("Caio");