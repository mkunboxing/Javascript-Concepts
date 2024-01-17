
const originalArray = [1, 2, [3, 4]];
const shallowCopy = [...originalArray];

console.log(shallowCopy); // [1, 2, [3, 4]]

// Modifying the shallow copy won't affect the original array directly
shallowCopy[2][0] = 99;
console.log(originalArray); // [1, 2, [99, 4]]


// Using Object.assign (for objects):

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, originalObject);

console.log(shallowCopy); // { a: 1, b: { c: 2 } }

// Modifying the shallow copy won't affect the original object directly
shallowCopy.b.c = 99;
console.log(originalObject); // { a: 1, b: { c: 99 } }