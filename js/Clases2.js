class User{
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

var objeto = new User();
objeto.nombre; //Getter
objeto.nombre = "Jose";  //Setter
//Segundo ejemplo
objeto.nombre = "Juan"; 
console.log( objeto.nombre ); //Getter

class usuario{
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre) {
        if( typeof nombre !== "string" ){
            throw new Error("No es una cadena.");
        }
        this._nombre = nombre;
    }
}

var objeto2 = new usuario();
objeto2.nombre = "Maria"; 
console.log( objeto2.nombre ); //Getter
objeto2.nombre = 123;