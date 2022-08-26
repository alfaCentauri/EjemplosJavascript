let rango = {
    min: null,
    termino1: 0,
    termino2: 1,
    max: null,
    currentValue: 0,
    contador: null,
    //Implementación del iterator
    [Symbol.iterator](){
        return this;
    },
    //Iterable
    next(){
        if ( this.contador == null ) this.contador = this.min;//debug
        let result = {};
        if ( this.contador >= this.min && this.contador <= this.max ){
            result = { 
                value: this.currentValue, 
                done: false 
            };
            this.currentValue = (this.termino1 + this.termino2);
            this.termino1 = this.termino2;
            this.termino2 = this.currentValue;
            this.contador += 1;
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
rango.min = 0;
rango.max = 20;
console.log("Ejemplo de iteradores #3. Generando la salida con la secuencia de Fibonacci: ");
for( n of rango ){
    console.log(n);
}
