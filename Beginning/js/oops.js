//OOPs
//Encapsulation
//Abstraction
//INhertance
//Polymorphism

const tv = {
	//Properties
	color: "black",
	isRunning: false,
	currentVolume: 0,
	//Methods
	on() {
		this.isRunning = true;
	},
	off() {
		this.isRunning = false;
	},
	volumeUp() {
		this.currentVolume++;
		console.log(this.currentVolume);
	},
	volumeDown() {
		this.currentVolume--;
		console.log(this.currentVolume);
	},
};

const stopwatch = {
	isRunning: false,
	startTime: 0,
	stopTime: 0,
	readings: [],
	totalDuration: 0,
	//Methods
	start() {
		if (this.isRunning) throw new Error("Watch is already running..");
		this.isRunning = true;
		this.startTime = new Date().getTime();

		console.log(`Watch has started @ ${this.startTime}`);
	},
	stop() {
		if (!this.isRunning) throw new Error("Watch has already stopped");
		this.isRunning = false;
		this.stopTime = new Date().getTime();
		console.log(`Watch has stoppped... @ ${this.stopTime}`);
		console.log(`Total Duration - ${this.getTotalDuration()} seconds...`);
	},
	getTotalDuration() {
		if (this.isRunning) throw new Error(`Watch hasn't stopped yet...`);
		let interval = (this.stopTime - this.startTime) / 1000;
		this.totalDuration = interval;
		return this.totalDuration;
	},
	takeReadings() {
		if (!this.isRunning) throw new Error(`watch hasn't started yet...`);
		let now = new Date().getTime();
		this.readings.push((now - this.startTime) / 1000);
		console.log(this.readings);
	},
	reset() {
		this.isRunning = false;
		this.startTime = 0;
		this.stopTime = 0;
		this.totalDuration = 0;
		this.readings = [];
	},
};
