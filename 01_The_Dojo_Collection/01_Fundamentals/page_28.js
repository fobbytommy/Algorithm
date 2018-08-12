// Signma
const sigma = num => {
	if (typeof num === "number" && num > 0) {
		var count = 0;
		while (num > 0) {
			count += num;
			num--;
		}
		return count;
	}
	return null;
};

console.log(sigma(3));

// Factorial
console.log("------------------------------------------");
const factorial = num => {
	if (typeof num === "number" && num > 0) {
		var count = 1;
		while (num > 0) {
			count *= num;
			num--;
		}
		return count;
	}
	return null;
};
console.log(factorial(5));

// Star Art
console.log("------------------------------------------");
const drawLeftStars = num => {
	if (typeof num === "number" && num > 0) {
		let stars = "";
		while (num > 0) {
			stars += "*";
			num--;
		}
		return stars;
	}
	return null;
};
console.log(drawLeftStars(5));

const drawRightStars = num => {
	if (typeof num === "number" && num > 0 && num < 75) {
		let stars = "";
		for (let i = 0; i < 75 - num; i++) {
			stars += " ";
		}
		while (num > 0) {
			stars += "*";
			num--;
		}
		return stars;
	}
	return null;
};
console.log(drawRightStars(5));

const drawCenteredStars = num => {
	if (typeof num === "number" && num > 0 && num < 75) {
		let stars = "";
		let spaces = Math.floor((75 - num) / 2);
		for (let i = 0; i < spaces; i++) {
			stars += " ";
		}
		while (num > 0) {
			stars += "*";
			num--;
		}
		for (let i = 0; i < spaces; i++) {
			stars += " ";
		}
		if (stars.length < 75) {
			stars += " ";
		}
		// return stars.length;
		return stars;
	}
	return null;
};
console.log(drawCenteredStars(5));

// Character Art
console.log("------------------------------------------");
const drawLeftChars = (num, char) => {
	if (typeof num === "number" && num > 0) {
		let stars = "";
		while (num > 0) {
			stars += char;
			num--;
		}
		return stars;
	}
	return null;
};
console.log(drawLeftChars(5, "x"));

const drawRightChars = (num, char) => {
	if (typeof num === "number" && num > 0 && num < 75) {
		let stars = "";
		for (let i = 0; i < 75 - num; i++) {
			stars += " ";
		}
		while (num > 0) {
			stars += char;
			num--;
		}
		return stars;
	}
	return null;
};
console.log(drawRightChars(5, "x"));

const drawCenteredChars = (num, char) => {
	if (typeof num === "number" && num > 0 && num < 75) {
		let stars = "";
		let spaces = Math.floor((75 - num) / 2);
		for (let i = 0; i < spaces; i++) {
			stars += " ";
		}
		while (num > 0) {
			stars += char;
			num--;
		}
		for (let i = 0; i < spaces; i++) {
			stars += " ";
		}
		if (stars.length < 75) {
			stars += " ";
		}
		// return stars.length;
		return stars;
	}
	return null;
};
console.log(drawCenteredChars(5, "x"));

// Threes and Fives
console.log("------------------------------------------");
const threesFives = () => {
	var count = 0;
	for (let i = 100; i < 4000000; i++) {
		if ((i % 3 === 0) ^ (i % 5 === 0)) {
			count += i;
		}
	}
	return count;
};
console.log(threesFives());

const betterThreesFives = (start, end) => {
	var count = 0;
	for (let i = start; i < end; i++) {
		if ((i % 3 === 0) ^ (i % 5 === 0)) {
			count += i;
		}
	}
	return count;
};
console.log(betterThreesFives(10, 15));

// Generate Coin Change
console.log("------------------------------------------");
const generateCoinChange = cents => {
	var coins = {
		quarters: 0,
		dimes: 0,
		nickels: 0,
		pennies: 0
	};
	var changes = cents;
	coins.quarters = Math.floor(changes / 25);
	changes -= coins.quarters * 25;
	coins.dimes = Math.floor(changes / 10);
	changes -= coins.dimes * 10;
	coins.nickels = Math.floor(changes / 5);
	changes -= coins.nickels * 5;
	coins.pennies = changes;

	return coins;
};
console.log(generateCoinChange(94));

// Generate Coin Change
console.log("------------------------------------------");
const messyMath = num => {
	var sum = 0;
	for (let count = 0; count <= num; count++) {
		if (num / 3 === count) {
			return -1;
		} else if (count % 3 === 0) {
			continue;
		} else if (count % 7 === 0) {
			sum += count * 2;
		} else {
			sum += count;
		}
	}
	return sum;
};
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));
