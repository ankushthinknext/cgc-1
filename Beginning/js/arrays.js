let names = ["abc", "def", "ghi", "lmn", "pqr"];
let numbers = [832, 2938, 290, 45, 32, 11, 33, 77, 0, 9, 4, 2, 1, 22, 1];
let mixture = ["fkdjskl", 390482, true, ["i", "j", "k"]];

//CRUD - Create Read Update Delete

//insertion of element in a array
//beginning  unshift()
//middle splice()
//from end push()

//deletion of elements from an array
//beginning shift()
//middle splice()
//end pop()

//for of
//forEach

// for (let i of names) {
// 	console.log(i);
// }

// names.forEach((x) => console.log(x));

//filter

let filtered = numbers.filter((number) => number % 3 === 0 || number % 5 === 0);
let mapped = numbers.map((number) => number ** 2);

let alpha = ["f", "A", "a", "c", "z", "Z"];

alpha.sort((a, b) => {
	a = a.toUpperCase();
	b = b.toUpperCase();
	if (a > b) return 1;
	if (a < b) return -1;
	return 0;
});
numbers.sort(function (a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
});
