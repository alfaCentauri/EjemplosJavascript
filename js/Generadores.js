function* counter(){
    for( var i = 1; i <= 5; i++){
        yield i;
    }
}

let generador = counter();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());