
/*A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished */

// How to create a Callback

// To understand what I’ve explained above, let me start with a simple example. We want to log a message to the console but it should be there after 3 seconds.

// const message = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(message, 3000);

// // another example for callback function

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })


// one simple example

// function printFirstName(firstName, cb) {
//     console.log(firstName);
//     cb("kumar")
// }

// function printLastName(lastName) {
//     console.log(lastName);
// }

// printFirstName("sachin", printLastName);


// // one more example

// function firstName(firstNameValue, callback) {
//     callback(firstNameValue);
//   }
  
//   function lastName(lastNameValue, callback) {
//     callback(lastNameValue);
//   }
  
//   function fullname(firstName, lastName, callback) {
//     callback(firstName + " " + lastName);
//   }
  
//   // Example usage with callback functions
//   firstName("sachin", function (first) {
//     lastName("kumar", function (last) {
//       fullname(first, last, function (fullName) {
//         console.log(fullName);
//       });
//     });
//   });
  
  // real life  example for callback function
 
//   const checkEven = (num) =>{
//     return num % 2 == 0;
//   }

//   let printResult = (evenfn , num) =>{
//     const isEven = evenfn(num);

//     console.log(`this ${num} is ${isEven}`);
//   }

//   printResult(checkEven, 1)