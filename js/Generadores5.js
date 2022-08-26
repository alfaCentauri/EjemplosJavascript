let rango = {
    min: null,
    max: null,
    [Symbol.iterator](){
        return this.generator();
    },
    generator: function* (){
        for( var i = this.min; i <= this.max; i++){
            yield i;
        }
    },
};
//Definiendo rango
rango.min = 5;
rango.max = 50;
console.log("Ejemplo de Generadores #5. Generando la salida: ");
for( n of rango ){
    console.log(n);
}
