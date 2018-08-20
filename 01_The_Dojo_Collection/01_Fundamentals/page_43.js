"use strict";

// Array: Shuffle
const shuffle = arr => {
	for (let i = 0; i < arr.length; i++) {
		let ranNum;
		let flag = true;
		while (flag) {
			ranNum = Math.floor(Math.random() * arr.length);
			if (i == ranNum) {
				ranNum = Math.floor(Math.random() * arr.length);
			} else {
				flag = false;
			}
		}
		let temp = arr[i];
		arr[i] = arr[ranNum];
		arr[ranNum] = temp;
	}
};
var arr = [1, 2, 3, 4, 5];
shuffle(arr);
console.log(arr);

// Array: Remove Range
console.log("-------------------------------------------------");
const removeRange = (arr, start, end) => {
	var jump = end - start + 1;
	for (let i = start; i <= end; i++) {
		arr[i] = arr[i + jump];
	}
	for (let i = 0; i < jump; i++) {
		arr.pop();
	}
	return arr;
};
var arr = [20, 30, 40, 50, 60, 70];
console.log(removeRange(arr, 0, 2));

// Intermediate Sums
console.log("-------------------------------------------------");
const IntermediateSums = arr => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i == 0 || i % 10 !== 0) {
			count += arr[i];
		} else {
			// reached 10th element
			for (let j = arr.length; j > i; j--) {
				arr[j] = arr[j - 1];
			}
			// replace 10th element with the sum
			arr[i] = count;
			// reset count
			count = 0;
		}
	}
	arr.push(count);
	return arr;
};
var arr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
console.log(IntermediateSums(arr));

// Double Trouble
console.log("-------------------------------------------------");
const doubleTrouble = arr => {
	let currIndex = 0;
	while (arr.length !== currIndex) {
		for (let i = arr.length; i > currIndex; i--) {
			arr[i] = arr[i - 1];
		}
		currIndex += 2;
	}
	return arr;
};
var arr = [4, "Ulysses", 42, false];
console.log(doubleTrouble(arr));

// Zip It
console.log("-------------------------------------------------");
const zipIt = (arr1, arr2) => {
	let originalLength = arr1.length;
	// double up first array
	doubleTrouble(arr1);
	for (let i = 0; i < originalLength; i++) {
		arr1[i + i + 1] = arr2[i];
	}
	for (let i = originalLength; i < arr2.length; i++) {
		arr1.push(arr2[i]);
	}
	for (let i = originalLength; i > arr2.length; i--) {
		arr1.pop();
	}
};
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [10, 20, 30, 40, 50, 60, 70];
zipIt(arr1, arr2);
console.log(arr1);
