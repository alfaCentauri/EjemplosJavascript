function* counter(){
    for( var i = 1; i <= 5; i++){
        yield i;
    }
}

let generador = counter();
let numeros = [2,5,10];
console.log("Salida del objeto iterable con un for: ");
for(numero of numeros){
    console.log(numero);
}

let contador = {
    [Symbol.iterator](){
        return {
            currentValue: 1,
            next() {
                let result = { value:null, done:false};
                if ( this.currentValue > 0 && this.currentValue <= 5 ){
                    result = { value: this.currentValue, done: false };
                    this.currentValue += 1;
                }
                else {
                    result = { done: true };
                }
                return result;
            }
        };
    }
};

console.log("Salida del objeto iterable con una implementacion de Symbol y un for: ");
for(numero of contador ){
    console.log(numero);
}