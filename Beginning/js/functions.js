//function definition
let isEligible = (age) => age > 18;

//funciton usage
//arrow function

/**
 *
 * @param {Number} divident
 * @param {Number} divisor
 * @returns {Boolean}
 * @description ffdjksj
 */
let isDivisible = (divident, divisor) => divident % divisor === 0;

/**
 *
 * @param {Number} number
 * @description checks if a number is prime or not
 * @returns {Boolean}
 */

function isPrime(number) {
	for (let i = 2; i < number; i++) if (isDivisible(number, i)) return false;
	return true;
}

function primeSeries(limit) {
	for (let i = 2; i <= limit; i++) if (isPrime(i)) console.log(i);
}

export { primeSeries, isPrime, isDivisible };
