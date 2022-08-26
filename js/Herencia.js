function Course(title){
    this.title = title;
}

let javaScript = new Course("Curso profesional de JavaScript...");
let ruby = Object.create(javaScript);
console.log(ruby);

console.log("Herencia de Prototipos");
console.log(ruby.title);