// The basic implementation of bind goes like

let basic = {
    'name': 'shyam',
    'age': 24
  };
  
  function callMe(city) {
    console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
  }
  let callBinded = callMe.bind(basic, 'jammu');
  callBinded('j&k'):

//   Output: Hi! my name is shyam and my age is 24 and my city is jammu and state is j&k


////////////////////////////////////////////////////////////////////////////////////


// Polyfill for bind():

Function.prototype.myBind = function(...args){
    var callback = this,
        ctx = args.splice(1);
    return function(...a){        
        callback.call(args[0], ...[...ctx, ...a]);
    }
}

const result2 = printName.myBind(myName, "Palia",);
result2("India");

