function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by assigning the inner function to a variable
  const closureExample = outerFunction();
  
  // Invoke the closure, which still has access to outerVariable
  closureExample(); // Output: I am from the outer function
  

//   Scope and Lexical Scope:

// A closure is based on the concept of lexical scope in JavaScript. Lexical scope means that the scope of a variable is determined by its location within the source code.
// A closure is created when a function is defined inside another function, and the inner function retains access to the variables of the outer function, even after the outer function has finished executing.
// Creating Closures:

// Closures are often created when a function is returned from another function. In the previous example, outerFunction returns innerFunction, creating a closure.
// Access to Outer Variables:

// The inner function has access to its own variables, parameters, and the variables of the outer function. It "closes over" the variables it references, hence the term "closure."
// Private Variables:

// Closures are frequently used to create private variables. Since the inner function retains access to the outer function's variables, those variables are not directly accessible from outside the closure.

function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // Output: 1
  counter(); // Output: 2


  function fetchData(url, callback) {
    // ...
  
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data));
  }
  
  const processAndLogData = (data) => {
    // Accesses variables from the outer scope
    console.log(data);
  };
  
  fetchData('https://example.com/api/data', processAndLogData);
  
  