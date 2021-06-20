let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

let num = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) != 1) {
			even.push(arr[i]);
			console.log(even);
		} else {
			odd.push(arr[i]);
			console.log(odd);
		}
	}
};

nums(arr);
console.log(even);
console.log(odd);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const primeNo = arr.filter(element => isPrime(element));
console.log(primeNo);