function* fibonacci(){
    var fn1 = 1;
    var fn2 = 1;
    while (true){
      var actual = fn2;
      fn2 = fn1;
      fn1 = fn1 + actual;
      var reset = yield actual;
      if (reset){
          fn1 = 1;
          fn2 = 1;
      }
    }
  }
  
  var secuencia = fibonacci();
  for( var i = 0; i <= 20; i++ ){
    console.log(secuencia.next().value); 
  }
  console.log(secuencia.next(true).value);
