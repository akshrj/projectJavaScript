let user = [
	{“id”: 1, “name”: “Amit Kumar”, “age”: 25},
	{“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
	{“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
	{“id”: 4, “name”: “Rohit Verma”, “age”: 35},
	{“id”: 5, “name”: “Ajay Jain”, “age”: 17},
];

// Print id and name
// of the youngest and oldest person

let youngest = user.reduce((a, b) => Math.min(a, b.age), user[0].age);
console.log(youngest);

let oldest = user.reduce((a, b) => Math.min(a, b.age), user[0].age);
console.log(oldest);