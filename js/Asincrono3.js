let request = require('request');

function leerPagina(url){
    return new Promise( function(resolve, reject){
        request(url, function(error, response){
            if(error) return reject(error);
            else return resolve(response);
        });
    });
}

let promesa = leerPagina("https://www.google.com");
promesa.then( result => console.log(result) );
promesa.catch( error => console.error(error) );
promesa.finally( () => console.log("Limpiar el formulario ó detener el loader.") );