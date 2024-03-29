// inbuilt Promise All Function

Promise.all([Promise1, Promise2, Promise3])
 .then(result) => {
   console.log(result)
 })
 .catch(error => console.log(`Error in promises ${error}`))


/* What is Polyfill

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

Suppose Promise.all not available so lets create our Promise.all() function . we will use async and await to achieve this.*/

function myPromiseAll(taskList) {
    //to store results 
    const results = [];
    //to track how many promises have completed
    let promisesCompleted = 0;
    // return new promise
    return new Promise((resolve, reject) => {

      //for each promise
      taskList.forEach((promise, index) => {
       //if promise passes
        promise.then((val) => {
          //store its outcome and increment the count 
          results[index] = val;
          promisesCompleted += 1;
          
          //if all the promises are completed, 
          //resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results)
          }
        })
           //if any promise fails, reject.
          .catch(error => {
            reject(error)
          })
      })
    });
  }

//   Test case 1.


// Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList1 = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList1)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

// Output:"got results" [1000,5000,3000]


// Test case 2.

// Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(time < 3000){
        reject("Rejected");
      }else{
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

// Output:
// "Rejected"