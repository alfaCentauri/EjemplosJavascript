let usuario = { nombre: "Maria", edad: 28, sexo: "F", direccion: "Algun lugar"};
console.log(usuario);

let { direccion: direccion} = usuario;

console.log(direccion);

//Aplicando destructuración con ...

let { nombre: nombre, ...dataAdicional } = usuario;

console.log("Nombre: ", nombre);
console.log(dataAdicional);