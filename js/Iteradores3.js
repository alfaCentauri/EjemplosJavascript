let rango = {
    min: null,
    max: null,
    currentValue: null,
    //Implementación del iterator
    [Symbol.iterator](){
        return this;
    },
    //Iterable
    next(){
        if ( this.currentValue == null ) this.currentValue = this.min;
        let result = {};
        if ( this.currentValue >= this.min && this.currentValue <= this.max ){
            result = { 
                value: this.currentValue, 
                done: false 
            };
            this.currentValue += 1;
        }
        else {
            result = { 
                done: true 
            };
        }
        return result;
    },
};
//Definiendo rango
rango.min = 5;
rango.max = 10;
console.log("Ejemplo de iteradores #3. Generando la salida: ");
for( n of rango ){
    console.log(n);
}
