function myPromiseAll(tasklist) {
    const result = [];
    return new Promise((resolve, reject) => {
        tasklist.forEach((p, index) => {
            p.then(val => {
                result.push(val);
                if (index === tasklist.length - 1) {
                    resolve(result);
                }
            })
            .catch(err => reject(err)); 
        });
    });
}

function task(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (time > 3000) {
                reject("rejected");
            } else {
                resolve(time);
            }
        }, time);
    });
}

const tasklist = [task(1000), task(2000), task(2000)];

myPromiseAll(tasklist)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);
