// Create a function sum which accepts any amount of numbers and return the sum of their addition

let val1 = 0;
let val2 = 0;
let val3 = 0;

let sum = (val1, val2, val3) => {
  return val1 + val2 + val3;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
