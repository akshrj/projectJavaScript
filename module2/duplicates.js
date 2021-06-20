let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

// MDN: A value in the Set may only occur once; it is unique in the Set's collection.
let unique = [...new Set(arr)];
console.log(unique);