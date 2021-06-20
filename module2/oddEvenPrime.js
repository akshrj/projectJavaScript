let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddArr = arr.filter(num => num % 2 != 0);
console.log(oddArr);

let evenArr = arr.filter(num => num % 2 == 0);
console.log(evenArr);

let isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

let primeArr = arr.filter(num => isPrime(num));
console.log(primeArr);