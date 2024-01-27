// The call() method calls the function with a given this value and arguments provided individually.

function sayHello(){
    return "Hello " + this.name;
  }
  
  var obj = {name: "Mukul"};
  
  sayHello.call(obj); //Hello Mukul

//   Here we are passing the obj to the call() and then this points to "obj" object.


  