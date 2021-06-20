let arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let unique = [];

function removeDuplecates(element) {
	element.forEach(num => {
		if (!unique.includes(num)) {
			unique.push(num);
		}
	});
}

removeDuplecates(arr);
console.log(unique);