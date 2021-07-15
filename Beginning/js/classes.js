class Stopwatch {
	constructor(color, productId) {
		this.color = color;
		this.productId = productId;
	}
	//private properties
	#startTime = 0;
	#stopTime = 0;
	#isRunning = 0;
	//Methods;
	start() {
		if (this.#isRunning) throw new Error("WAtch has already started...");
		this.#isRunning = true;
		this.#startTime = new Date().getTime();
		console.log(`Watch started  ${this.#startTime}`);
	}
	stop() {
		if (!this.#isRunning) throw new Error("Watch has already stopped...");
		this.#isRunning = false;
		this.#stopTime = new Date().getTime();
		console.log(
			`WAtch total duration = ${(this.#stopTime - this.#startTime) / 1000} `,
		);
	}
	takeReadings() {}
}

// console.log(sw1.#startTime);
let sw1 = new Stopwatch("black", "FLKSJDSLKFJ8932472");
let sw2 = new Stopwatch("grey", "KDLSJLFKJSLKD98723098423");
