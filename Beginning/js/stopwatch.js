const stopwatch = {
	//Properties
	startTime: 0,
	stopTime: 0,
	totalDuration: 0,
	isRunning: false,
	readings: [],
	//Methoods

	start() {
		if (this.isRunning) throw new Error("WAtch has already started...");
		this.isRunning = true;
		this.startTime = new Date().getTime();
		console.log(`Watch started  ${this.startTime}`);
	},
	stop() {
		if (!this.isRunning) throw new Error("Watch has already stopped...");
		this.isRunning = false;
		this.stopTime = new Date().getTime();
		console.log(`WAtch total duration = ${this.getDuration()} `);
	},
	takeReadings() {
		if (!this.isRunning) throw new Error(`Watch hasn't startted yet...`);
		let now = new Date().getTime();
		let interval = (now - this.startTime) / 1000;
		this.readings.push(interval);
		console.log(this.readings);
	},
	getDuration() {
		if (this.isRunning) throw new Error(`Watch hasn't stopped yet...`);
		let interval = (this.stopTime - this.startTime) / 1000;
		return interval;
	},
};
