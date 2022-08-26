class API{
    static ENDPOINT = "localhost:8000";
    static get(){ 
        return new this();
    }    
    name = "Tom";
}

console.log( API.ENDPOINT );
console.log("Debug API: ");
console.log( API.get() );