let request = require('request-promise');

let promesa = request("https://www.google.com");

promesa.then( function(){
    console.log("Termino la petición de la promesa.");
} );

promesa.catch( function(error){
    console.error("Fallo la promesa.");
});

promesa.finally( function (error) {
    console.log("Ejecuta la limpieza del formulario.");
});

console.log("Se ejecuta después de las promesas?");
