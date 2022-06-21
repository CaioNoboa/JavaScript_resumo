/*
    if...(else if)...else

    Mudam o fluxo da aplicação
    
    Estrutura
        if(condicional) {
            Se for true entrará neste bloco de código
        } else {
            Se não entrará neste
        }
*/

let temperature = 36.5;
// temperature = 38.5;
// temperature = 42;
// temperature = 37.5;

if(temperature >= 40) {
    console.log("Tá morrendo!");
} else if(temperature >= 38) {
    console.log("Misericórdia, vai pro médico!");
} else if(temperature > 37) {
    console.log("Ihh, fica atento nessa temperatura!");
} else {
    console.log("Tá sussa!");
}

// Poderia ser também:
let extremeTemperature = temperature >= 40; 
let highTemperature = temperature >= 38 && temperature < 40; 
let hasTemperature = temperature >= 37 && temperature < 38;

if(extremeTemperature) {
    console.log("Tá morrendo!");
} else if(highTemperature) {
    console.log("Misericórdia, vai pro médico!");
} else if(hasTemperature) {
    console.log("Ihh, fica atento nessa temperatura!");
} else {
    console.log("Tá sussa!");
}