let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];
let prime = []

let nums = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) != 1) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
};

nums(arr);
console.log(even);
console.log(odd);

let isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

let primes = function(arr) {
	for (let i=0; i < arr.length; i++) {
		if (isPrime(arr[i])) {
			prime.push(arr[i]);
		}
	}
}

primes(arr);
console.log(prime);