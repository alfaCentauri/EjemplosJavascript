let promesa1 = new Promise( (resolve, reject) => setTimeout(resolve, 500, "Terminada la promesa 1") ); 
let promesa2 = new Promise( (resolve, reject) => setTimeout(resolve, 1000, "Terminada la promesa 2!") ); 

function finalizado(){
    console.log("Todo finalizo");
}

Promise.all( [promesa1, promesa2] ).then( function(resultados) {
    console.log(resultados);
    finalizado();
}).catch( error => console.error(error) );
