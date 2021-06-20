let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let min = arr[0];
let max = arr[0];

function sum(arr, sum = 0) {
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function minMax(arr) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i]>max) {
        	max = arr[i];
    	}
    
    	if(arr[i]<min) {
        	min = arr[i];
    	}
	}
}
	     
console.log(sum(arr));
minMax(arr);
console.log(min);
console.log(max);