//let /const block scoped
//var function scoped

let loc = "Mohali"; //global variable
let address = "#934958";

{
	let firstname = "Mohit";

	{
		let lastName = "Sharma";
		// console.log(loc);
		{
		}
	}
}

// console.log(firstname);
function hello() {
	{
		{
			var first = "SUmit";
			console.log(address);
			console.log(loc);
		}
	}
	console.log(first);
}
hello();

console.log(first);
