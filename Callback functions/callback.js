
/*A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished */

// How to create a Callback

// To understand what I’ve explained above, let me start with a simple example. We want to log a message to the console but it should be there after 3 seconds.

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);