let simbolo = Symbol('mi-simbolo');
let simbolo2 = Symbol('mi-simbolo');
console.log(simbolo);
console.log(simbolo2);

var objeto = {};
objeto[simbolo] = function(){//Asigna el nombre
    console.log("Mi nombre es un símbolo");
}
//Utiliza el objeto con nombre de simbolo
objeto[simbolo]();