let arr = [0, 2, 4, 6, 8, 10, 12, 14, 16];


let twiceArr = [];
let halfArr = [];

function twice(arr) {
	for (let i = 0; i < arr.length; i++) {
		twiceArr.push(arr[i] * 2);
	}
	return twiceArr;
}

function half(arr) {
	for (let i = 0; i < arr.length; i++) {
		twiceArr.push(arr[i] / 2);
	}
	return halfArr;
}

console.log(twice(arr));
console.log(half(arr));