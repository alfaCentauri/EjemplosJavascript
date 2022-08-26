//Manejo de arreglos con map
let numeros = [1, 2, 3, 4, 5, 6];
console.log("Antes de iterar: ",numeros);
for( var i = 0; i < numeros.length; i++){
    numeros[i] = numeros[i] * numeros[i];
}
console.log("Despues de iterar: ");
console.log(numeros);

let cuadrados = numeros.map( function (numero){
    return numero*numero;
});
console.log("Despues de iterar con map: ");
console.log(cuadrados);
