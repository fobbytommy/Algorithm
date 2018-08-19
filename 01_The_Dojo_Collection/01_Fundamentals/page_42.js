// Array: Remove Negatives
const removeNegatives = arr => {
	for (let i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			for (let k = i; k < j - 1; k++) {
				arr[k] = arr[k + 1];
			}
			arr.pop();
		}
	}
};
var arr = [1, -2, 3, 4, -5, 6];
removeNegatives(arr);
console.log(arr);

// Array: Second-to-Last
console.log("---------------------------------------------");
const secondToLast = arr => {
	if (arr.length > 1) {
		return arr[arr.length - 2];
	} else {
		return null;
	}
};
var arr = [42, true, 4, "Liam", 7];
console.log(secondToLast(arr));

// Array: Second-Largest
console.log("---------------------------------------------");
const secondLargest = arr => {
	if (arr.length < 1) {
		return null;
	}
	let max, second;
	if (arr[0] > arr[1]) {
		max = arr[0];
		second = arr[1];
	} else {
		max = arr[1];
		second = arr[0];
	}
	for (let i = 2, j = arr.length; i < j; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] > second) {
			second = arr[i];
		}
	}
	return second;
};
var arr = [41, 1, 4, Math.PI, 7];
console.log(secondLargest(arr));

// Array: Nth-to-Last
console.log("---------------------------------------------");
const nthToLast = (arr, n) => {
	if (arr.length < n) return null;
	return arr[arr.length - n];
};
var arr = [5, 2, 3, 6, 4, 9, 7];
console.log(nthToLast(arr, 3));

// Array: Nth-Largest
console.log("---------------------------------------------");
const nthLargest = (arr, n) => {
	if (arr.length < n) return null;
	// lets sort the array from largest to lowest
	let done = false;
	while (!done) {
		done = true;
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] < arr[i]) {
				done = false;
				var temp = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = temp;
			}
		}
	}

	// return the index
	return arr[n - 1];
};
var arr = [-3, 4, 5, 6, 35, -23, 33];
console.log(nthLargest(arr, 3));
console.log(arr);

// Credit Card Validation
console.log("---------------------------------------------");
const isCreditCardValid = arr => {
	let lastDigit = arr.pop();
	for (i = arr.length; i > 0; i--) {
		if (i % 2 == 1) {
			arr[i] *= 2;
			if (arr[i] > 9) {
				arr[i] -= 9;
			}
		}
	}
	let sum = 0;
	arr.forEach(n => {
		sum += n;
	});
	sum += lastDigit;
	if (sum % 10 !== 0) {
		return false;
	} else {
		return true;
	}
};
var arr = [5, 2, 2, 8, 2];
console.log(isCreditCardValid(arr));
