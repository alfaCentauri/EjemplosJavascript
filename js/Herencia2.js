function Course(title){ 
    this.title = title; 
}
Course.prototype.inscribir = function(){
    console.log("Inscribir.");
}

function LiveCourse(date){
    this.published_at = date;
}
LiveCourse.prototype = Object.create( Course.prototype ); // {__proto__: Course.prototype }

let javaScript = new LiveCourse( new Date() );
javaScript.inscribir();

console.log(javaScript);