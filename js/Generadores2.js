function* counter(){
    for( var i = 1; i <= 5; i++){
        yield i;
    }
}

let generador = counter();
function* retornador(){
    yield* counter();
    console.log("Regrese");
    yield 3;
}
let segundoGenerador = retornador();

console.log(segundoGenerador.next());
console.log(segundoGenerador.next());
console.log(segundoGenerador.next());
console.log(segundoGenerador.next());
console.log(segundoGenerador.next());
console.log(segundoGenerador.next());
