let request = require('request');
/** Callback **/
request("https://www.google.com", function(){
    console.log("Termine la petisión.");
});

console.log("Se ejecuta después...");