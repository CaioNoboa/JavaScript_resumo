/*
    Tipos de dados
    String, number, boolean, undefined e null, object, array
    
#   String
        Cadeia de caracteres (texto)
        Para strings devemos utilizar:
        "" (aspas duplas)
            '' (aspas simples)
            `` (template literals, template strings ou acento grave)
            
            Quando utilizar "" ou ''?
            Se dentro do texto eu for usar '', então devo usar "" para delimitar a String ("caixa d'água")
            Se dentro do texto eu for usar "", então devo usar '' para delimitar a String ('ele "falou"')
            Se utilizarmos `` para delimitar a String, poderemos utilizar dentro do texto tanto "" quanto ''
            
            `` permite multilinhas, o que não é permitido para "" e ''. Permite também interpolações (`Caio tem ${20+7} anos e ${data} kg`)
            `Caio
            Salvador
            Noboa`
    
            
#   Number
        100 -10 - inteiros
        10.5    - reais
        NaN     - (not a number)
        Infinity- infinito
            
        Number não precisa ter e não pode ter outros caracteres para "mostrar" que é número, ex.:
                55 - number         "55" - string
            
            No console.log podemos efetuar operações matemáticas
                console.log(12.5 + 12)
                console.log(10 / 10)
                console.log(10 / "aa") -> NaN
                console.log(Infinity) -> Infinity
                console.log(10 === Infinity) -> False

                
                #   Boolean
                True or false
        Apenas dois valores possíveis
        Faz parte da lógica de programação


#   Undefined vs null
        undefined != null

        Isto serve para JS:
            Undefined - indefinido, algo que não existe
            Null - nulo, objeto que não possui nada dentro


#   Object
        objeto
        dado estrutural, cria uma estrutura
        Propriedades -> Atributos
        Funcionalidades -> Métodos

        Objeto tem atributos e métodos

        Exemplo de um objeto:
        console.log({
            name: "Caio",
            idade: 26,
                andar: function() {
                    console.log('andar')
                }
            })
            
            
#   Array
        Vetores
        Uma lista
        Uma forma de estruturar dados, um agrupamento de dados

        Exemplo de uma lista:
            console.log([
                "Leite",
                "Ovos",
                2,
                3,
            ])


#   Conforme o ECMAScript standard (órgão que padroniza o JS) temos 9 tipos de dados.
    Temos 3 categorias para os dados: 
        Primitivos (primitive / primitive value)
        Estruturais (structural)
        Estrutural primitivo (structural primitive)

        Primitivos - o que define um primitivo é que não é um objeto e o valor dele é imutável (ex.: "abc" != "bca")
            String
            number
            boolean
            undefined
            symbol
            BigInt
        
        Estruturais
            Object - tem uma estrutura (atributos e métodos) - no agrupamento de object podemos colocar (os seguintes derivam do object, nascem do object):
                Array
                Map
                Set
                Date
                podemos também criar objetos do tipo String, number e etc.

            Function

        Primitivo estrutural
            null
*/