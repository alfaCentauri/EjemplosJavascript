let texto = "Las expresiones regulares facilita el trabajo de encontrar en el texto y una porción de texto específico";
let texto2 = "El conjunto de datos A: 100 tienen 60000 registros";

console.log("Expresiones regulares: ");
console.log(texto);

let nuevoTexto = texto.replace(/texto/, "palabra");
console.log(nuevoTexto);
let nuevoTexto2 = texto2.replace(/(\d)(\d{3})/g, "$1,$2");
console.log(nuevoTexto2);