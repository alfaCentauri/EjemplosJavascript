//Ejercicio #1: Prompt para entrada de datos.
var cadena = prompt("Escribe una frase: ");
console.log(cadena);
//Ejercicio #2: Tipos de datos.
/* 
String
Number
Boolean
undefined
Symbol
Null
bigInt
*/

let resultado = Boolean(0);
console.log(resultado);
resultado = Boolean(2);
console.log(resultado);

//Para comprobar los nulos
let resultado2 = 12;
console.log(resultado2 ?? "Es nulo"); //No ejecuta

//Ejercicio #3: Funciones con parametros por copias
let edad = 20;
console.log("Antes de la función: " + edad);
escribirMensaje(edad);
console.log("Despues la función: " + edad);

/** Función con parametros con valor por defecto. **/
function escribirMensaje(edad = 0){
    edad = 30;
    console.log("Desde la función: " + edad);
}

//Ejercicio #4: Funciones con parametros por referencia
let edades = [20];
console.log("Antes de la función: " + edades);
escribirMensaje(edades);
console.log("Despues la función: " + edades);

/** Función con parametros con valor por defecto. **/
function escribirMensaje(edades){
    edades[0] = 30;
    console.log("Desde la función: " + edades);
}

//Ejercicio #5: Función pura: no produce cambios en el parametro que recibe.
let listado = ['raton', 'gato', 'perro', 'conejo'];
console.log("Antes de la función: " + listado);
escribirMensaje(listado);
console.log("Despues la función: " + listado);

/** Función con parametros con valor por defecto. **/
function escribirMensaje(edades){
    edades[0] = 30;
    console.log("Desde la función: " + edades);
}

/**Ejercicio #6: Arreglos. */
let arreglo = ["Programación", "Javascript", "Html", "CSS", { id: 1, nombre: "Analisis"}, 
    function mensaje(texto = ""){
        console.log(mensaje);
    },
    [ 0, 1, 1, 2, 3, 5, 8, 13]
];
//Salida por consola
console.log(arreglo);
//Agregar datos al principio del arreglo
arreglo.unshift("ejemplo 6");
console.log(arreglo);
//Agregar datos al final del arreglo
arreglo.push("nuevo");
console.log(arreglo);
//Extraer primer elemento del arreglo
let elemento = arreglo.shift();
console.log(elemento);
//Extraer ultimo elemento del arreglo
let elemento2 = arreglo.pop();
console.log(elemento);

//Recorridos del arreglo
for(var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}
//Recorrido del arreglo con forEach
arreglo.forEach(function (item){
    console.log(item);
});
//Recorrido del arreglo con forEach y parametro adicional
arreglo.forEach(function (item, indice){
    console.log("Elemento[" + indice + "]: "+item);
});
//Recorrido del arreglo con forEach, con indice y el mismo arreglo base
arreglo.forEach(function (item, indice, arreglo){
    console.log("Elemento[" + indice + "]: "+item);
    console.log(arreglo);
});

