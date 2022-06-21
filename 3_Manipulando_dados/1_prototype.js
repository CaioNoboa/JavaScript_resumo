/*
    Prototype (protótipo)

    JS é uma linguagem "prototype-based", baseada em protótipos
    Protótipos são funcionalidades previamente definidas
    Existe uma prototype chain, várias funcionalidades já criadas
    Facilitam a manipulação de dados
    
    Não precisamos ficar criando funções para determinada funcionalidade, é bem possível que já exista. Acessaremos com um '.'


    Ao criarmos um objeto '{}', este objeto irá referenciar um outro objeto, já feito. Logo, o objeto criado herdará todas as propriedades e métodos desse objeto ascendente.

    __proto__ ou [[Prototype]]
        {}
            [[Prototype]]: Object
                constructor: ƒ Object()
                hasOwnProperty: ƒ hasOwnProperty()
                isPrototypeOf: ƒ isPrototypeOf()
                propertyIsEnumerable: ƒ propertyIsEnumerable()
                toLocaleString: ƒ toLocaleString()
                toString: ƒ toString()
                valueOf: ƒ valueOf()
                __defineGetter__: ƒ __defineGetter__()
                __defineSetter__: ƒ __defineSetter__()
                __lookupGetter__: ƒ __lookupGetter__()
                __lookupSetter__: ƒ __lookupSetter__()
                __proto__: (...)
                get __proto__: ƒ __proto__()
                set __proto__: ƒ __proto__()

    {} referencia o protótipo Object que já possui propriedades e funcionalidades.


    O objeto que criamos busca no protótipo acima métodos e funcionalidades. Se esse objeto ascendente referencia outro, buscará nesse outro métodos e funcionalidades e assim por diante. Geralmente o último proto será um objeto mais puro possível. O último passo da cadeia terá 'hasOwnProperty'

    A maioria dos tipos de dados são encapsulados por um objeto, ou seja, irão herdar toda a cadeia de protótipo
    
    Com __proto__ podemos ver todas os métodos e funcionalidades. Exemplos:
    
    "Mayk".__proto__
        String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
            anchor: ƒ anchor()
            at: ƒ at()
            big: ƒ big()
            blink: ƒ blink()
            bold: ƒ bold()
            charAt: ƒ charAt()
            charCodeAt: ƒ charCodeAt()
            codePointAt: ƒ codePointAt()
            concat: ƒ concat()
            constructor: ƒ String()
            endsWith: ƒ endsWith()
            fixed: ƒ fixed()
            fontcolor: ƒ fontcolor()
            fontsize: ƒ fontsize()
            includes: ƒ includes()
            indexOf: ƒ indexOf()
            italics: ƒ italics()
            lastIndexOf: ƒ lastIndexOf()
            length: 0
            link: ƒ link()
            localeCompare: ƒ localeCompare()
            match: ƒ match()
            matchAll: ƒ matchAll()
            normalize: ƒ normalize()
            padEnd: ƒ padEnd()
            padStart: ƒ padStart()
            repeat: ƒ repeat()
            replace: ƒ replace()
            replaceAll: ƒ replaceAll()
            search: ƒ search()
            slice: ƒ slice()
            small: ƒ small()
            split: ƒ split()
            startsWith: ƒ startsWith()
            strike: ƒ strike()
            sub: ƒ sub()
            substr: ƒ substr()
            substring: ƒ substring()
            sup: ƒ sup()
            toLocaleLowerCase: ƒ toLocaleLowerCase()
            toLocaleUpperCase: ƒ toLocaleUpperCase()
            toLowerCase: ƒ toLowerCase()
            toString: ƒ toString()
            toUpperCase: ƒ toUpperCase()
            trim: ƒ trim()
            trimEnd: ƒ trimEnd()
            trimLeft: ƒ trimStart()
            trimRight: ƒ trimEnd()
            trimStart: ƒ trimStart()
            valueOf: ƒ valueOf()
            Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
                [[Prototype]]: Object
                    constructor: ƒ Object()
                    hasOwnProperty: ƒ hasOwnProperty()
                    isPrototypeOf: ƒ isPrototypeOf()
                    propertyIsEnumerable: ƒ propertyIsEnumerable()
                    toLocaleString: ƒ toLocaleString()
                    toString: ƒ toString()
                    valueOf: ƒ valueOf()
                    __defineGetter__: ƒ __defineGetter__()
                    __defineSetter__: ƒ __defineSetter__()
                    __lookupGetter__: ƒ __lookupGetter__()
                    __lookupSetter__: ƒ __lookupSetter__()
                    __proto__: (...)
                    get __proto__: ƒ __proto__()
                    set __proto__: ƒ __proto__()
                    [[PrimitiveValue]]: ""

    27.0.__proto__
        Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
            constructor: ƒ Number()
            toExponential: ƒ toExponential()
            toFixed: ƒ toFixed()
            toLocaleString: ƒ toLocaleString()
            toPrecision: ƒ toPrecision()
            toString: ƒ toString()
            valueOf: ƒ valueOf()
                [[Prototype]]: Object
                    constructor: ƒ Object()
                    hasOwnProperty: ƒ hasOwnProperty()
                    isPrototypeOf: ƒ isPrototypeOf()
                    propertyIsEnumerable: ƒ propertyIsEnumerable()
                    toLocaleString: ƒ toLocaleString()
                    toString: ƒ toString()
                    valueOf: ƒ valueOf()
                    __defineGetter__: ƒ __defineGetter__()
                    __defineSetter__: ƒ __defineSetter__()
                    __lookupGetter__: ƒ __lookupGetter__()
                    __lookupSetter__: ƒ __lookupSetter__()
                    __proto__: (...)
                    get __proto__: ƒ __proto__()
                    set __proto__: ƒ __proto__()
                    [[PrimitiveValue]]: 0

    true.__proto__
        Boolean {false, constructor: ƒ, toString: ƒ, valueOf: ƒ}
            constructor: ƒ Boolean()
            toString: ƒ toString()
            valueOf: ƒ valueOf()
                [[Prototype]]: Object
                    constructor: ƒ Object()
                    hasOwnProperty: ƒ hasOwnProperty()
                    isPrototypeOf: ƒ isPrototypeOf()
                    propertyIsEnumerable: ƒ propertyIsEnumerable()
                    toLocaleString: ƒ toLocaleString()
                    toString: ƒ toString()
                    valueOf: ƒ valueOf()
                    __defineGetter__: ƒ __defineGetter__()
                    __defineSetter__: ƒ __defineSetter__()
                    __lookupGetter__: ƒ __lookupGetter__()
                    __lookupSetter__: ƒ __lookupSetter__()
                    __proto__: (...)
                    get __proto__: ƒ __proto__()
                    set __proto__: ƒ __proto__()
                    [[PrimitiveValue]]: false


    Serão esses métodos e funcionalidades que nos permitirão grande manipulação de dados
    Acessaremos essas muitas coisas já disponíveis com '.'
    Exemplos:

    "Caio".length
        4

    ['Caio', 'Amanda', 'Sabrina'].length
        3    
    
    ['Caio', 'Amanda', 'Sabrina'][0].length
        4
*/