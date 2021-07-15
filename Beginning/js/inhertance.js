class Person {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
	#isVerified = false;
	speak() {
		console.log(`${this.name} is speaking....`);
	}
	walk() {
		console.log(`${this.name} is walking....`);
	}
}

class Student extends Person {
	constructor(id, name, rollNo) {
		super(id, name);
		this.rollNo = rollNo;
	}
	code() {
		console.log(`${this.name} is coding....`);
	}
}

class SeniorStudent extends Student {
	constructor(id, name, rollNo, specialization) {
		super(id, name, rollNo);
		this.specialization = specialization;
	}
	speak() {
		console.log(`Er. ${this.name} is speaking...`);
		super.speak();
	}
	research() {
		console.log(`${this.name} is working on ${this.specialization} `);
	}
}
