function primerPromesa(){
    return new Promise( (resolve, reject) => setTimeout(resolve, 500, "Terminada la promesa 1") ); 
}

function segundaPromesa(){
    return new Promise( (resolve, reject) => setTimeout(resolve, 1000, "Terminada la promesa 2!") ); 
}

function finalizado(){
    console.log("Todo finalizo");
}

primerPromesa().then(segundaPromesa).then( function(result){ console.log(result); });