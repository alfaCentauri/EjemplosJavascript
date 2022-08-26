//Manejo de filter
let numeros = [1, 2, 3, 4, 5, 6];
console.log("Antes de iterar: ",numeros);
let resultados = numeros.filter( function (numero) {
    return numero % 2 === 0;
});
console.log("Filtrados: ",resultados);

//Manejo de reduce
let nombres = ["Usuario 1", "Pedro Perez", "María Perez", "José Perez"];
console.log(nombres);
let html = nombres.reduce( function (acumulado,nombre) {
    return acumulado + "<li>" + nombre + "</li>";
}, "");
console.log(html);

//Manejo de la función find, para encontrar un elemento
let lenguajes = ["php", "ruby", "phyton", "c", "c++", "java", "javascritp"];
console.log(lenguajes);
let encontrado = lenguajes.find( function (elemento, posicion, lenguajes) {
    console.log("Posición: ", posicion);
    console.log("Puede recibir el arreglo, su contenido es: ", lenguajes);
    return elemento === "java";
});
console.log(encontrado);