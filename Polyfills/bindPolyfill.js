// The basic implementation of bind goes like

let car1 = {
    color: "blue",
    company: "Tata",
  };
  
function purchaseCar(currency, price) {
  console.log(`I have Purchased a ${this.color} ${this.company} car for ${currency} ${price}`);
}
 

// const newfunc = purchaseCar.bind(car1); // this is inbuilt bind
// console.log(newfunc("INR", 10000));

// Polyfill for bind 

Function.prototype.myBind = function (context = {}, ...args) {
  if(typeof this !== "function") {
    throw new Error(this + " is not a function");
  }

  context.fn= this;
  return function (...newArgs){
    return context.fn(...args, ...newArgs);
  }
  
}

const newfunc = purchaseCar.myBind(car1);
console.log(newfunc("INR", 10000));