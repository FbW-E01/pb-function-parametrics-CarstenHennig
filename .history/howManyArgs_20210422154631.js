// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3,
// passing 15 arguments should return the umber 15
// 1. Create a function in [`howManyArgs.js`](./howManyArgs.js) which returns the total amount of arguments passed to it.\
// e.g\
// `console.log(howManyArgs()) ---> 0 `\
// `console.log(howManyArgs(1, false, "hello")) ---> 3` \
// `console.log(howManyArgs("better")) ---> 1`

const howManyArgs = (arg1, arg2, arg3) => {
  array1 = [arg1, arg2, arg3];
  return array1.length;
};

// console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
// console.log(howManyArgs("better")); // -> 1
