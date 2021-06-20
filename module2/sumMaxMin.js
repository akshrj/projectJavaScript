let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let total = arr.reduce((acc, currVal) => acc + currVal, 0);
console.log(total);

let max = arr.reduce((a, b) => Math.max(a, b));
console.log(max);

let min = arr.reduce((a, b) => Math.min(a, b));
console.log(min);