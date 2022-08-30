let texto = "El conjunto de datos A: 51234 tienen 60000 registros";

console.log("Expresiones regulares: ");
console.log(texto);
let nuevoTexto = texto.replace(/(\d)(\d{3})/g, function(match, g1, g2, offset, cadena){
    console.log(match, g1, g2, offset, cadena);
    return g1 + "," + g2;
} );
console.log(nuevoTexto);