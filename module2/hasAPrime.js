let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];

let prime = function(arr) {
	return arr.some(val => {
    	for(let i = 2; i < val; i++) {
    		if(val % i === 0) {
    			return false;
    		}
  			return val > 1;
    	}
	});
}

console.log(prime(arr));