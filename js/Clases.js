/** Clase padre **/
class automovil{
    static placa = "abc123";
    static {
        var mensaje = "El automovil tiene la placa: " + this.placa;
    }
    static tipoMotor = "A gasolina";
}

/** Clase hija **/
class ford extends automovil{
    static modelo = "familiar";
    static {
        let motor = super.tipoMotor;
    }
    imprimir(){
        console.log(this.motor);//error
    }
}

/** Clase hija **/
class toyota extends automovil{
    static modelo = "rustico";
    static {
        let motor = "disel";
    }
    #saludar(){ //Función privada
        console.log("Hola mundo, desde la clase toyota.");        
    }
    imprimir(){
        this.#saludar();
        console.log("Modelo: ", this.modelo);
    }
}

console.log("Pruebas de clases con constructor ");
var carro = new ford();
var segundo = new toyota();
carro.imprimir();
segundo.imprimir();

/** Parámetros privados **/
let getCuadrado;
let getInverso;
let getMensajeValor;

/** Clase para calculos matemáticos **/
class calculo{
    #resultado;  /* Propiedad privada, solo puede utilizarce dentro de la clase */
    constructor(x){
        this.#resultado = x;
    }
    static {
        getCuadrado = (x) => x*x;
    }
    static {
        getInverso = (x) => 1/x;
    }
    incremento(){
        this.#resultado += 1;
    }
    imprimir(){
        console.log("El valor es ", this.#resultado);
    }
}

console.log("Pruebas de clases con constructor ");
var objeto = new calculo(3);
objeto.incremento();
objeto.imprimir();
