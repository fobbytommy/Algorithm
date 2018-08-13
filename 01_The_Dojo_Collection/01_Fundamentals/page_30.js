"use strict";

// Twelve-Bar Blues
const twelveBarBlues = () => {
	for (let i = 1; i <= 12; i++) {
		console.log(`${i} chick boom chick`);
	}
};
twelveBarBlues();

// Fibonacci
console.log("-------------------------------------");
const fib = num => {
	if (num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	} else {
		return fib(num - 2) + fib(num - 1);
	}
};
console.log(fib(6));
console.log(fib(7));

// Sum to One Digit
console.log("-------------------------------------");
const sumToOne = num => {
	if (num < 10) {
		return num;
	}
	var count = 0;
	while (true) {
		count += num % 10;
		if (count < 10 && num < 10) {
			return count;
		} else if (num < 10) {
			num = count;
			count = 0; // reset
		} else {
			num = Math.trunc(num / 10);
		}
	}
};
console.log(sumToOne(1111));
console.log(sumToOne(983));

// Clock Hand Angles
console.log("-------------------------------------");
const clockHandAngles = seconds => {
	// get hour min sec
	var hour, min, sec;
	hour = (seconds / 60 / 60) % 24;
	min = (seconds / 60) % 60;
	sec = seconds % 60;
	hour *= 360 / 12;
	min *= 360 / 60;
	sec *= 360 / 60;
	console.log(`Hour hand: ${hour} degs. Minute hand: ${min} degs. Second hand: ${sec} degs`);
};
clockHandAngles(3600);
clockHandAngles(119730);

// Is Prime
console.log("-------------------------------------");
const isPrime = num => {
	if (num < 1) {
		return null;
	}
	var count = num - 1;
	while (count > 1) {
		if (Number.isInteger(num / count)) {
			return `${num} is not a prime number`;
		}
		count--;
	}
	return `${num} is a prime number!`;
};
console.log(isPrime(4));
console.log(isPrime(13));
