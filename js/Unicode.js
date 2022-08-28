function toCodePoint(char){
    var hex = char.charCodeAt(0).toString(16); //Convierte el caracter a hexdecimal
    return "\\u" + "0000".substring(0,4 - hex.length) + hex; //Agrega los ceros faltantes al inicio
}

console.log(toCodePoint("a"));
console.log( "\u0061" );