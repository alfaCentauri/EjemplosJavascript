let texto = "El deportista de hoy viste con ropa deportiva de Adidas";
let textoFiltrado = filtrarMarcas(texto);

function filtrarMarcas( cadena ){
    let marcas = ["Adidas", "Nike", "Rebook"];
    let palabrasFiltradas = cadena.split(" ").map(
        palabra => {
            return marcas.includes(palabra)? "XXX": palabra
        }
    );
    return palabrasFiltradas.join(" ");
}

console.log("Resultado: ");
console.log(textoFiltrado);