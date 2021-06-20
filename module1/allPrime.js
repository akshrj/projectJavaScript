let arr =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

function isPrime(element) {
    let flag = 0;

    for(let i = 2; i < element - 1; i++) {
        if(element % i == 0) {
            flag++;
        }
    }

    if(flag == 0) {
        return true;
    } else {
        return false;
    }
}

let primeCount = 0;
function allPrime(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) {
            primeCount++;
        }
    }

    if (primeCount == arr.length) {
        return "List is full of prime no.";
    } else {
        return "Not all elements are prime."
    }
}

console.log(allPrime(arr));