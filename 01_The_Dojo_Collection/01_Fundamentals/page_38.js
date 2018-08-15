"use strict";

// Array: Push Front
const pushFront = (arr, val) => {
	for (let i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = val;
	return arr;
	// const newArr = [];
	// newArr.push(val);
	// arr.forEach(val => {
	// 	newArr.push(val);
	// });
	// return newArr;
};
var arr = [1, 2, 3, 4];
console.log(pushFront(arr, 0));

// Array: Pop Front
console.log("------------------------------------------------------");
const popFront = arr => {
	const popFirst = arr[0];
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.pop();
	return popFirst;
};
console.log(popFront(arr));
console.log(arr);

// Array: Insert At
console.log("------------------------------------------------------");
const insertAt = (arr, index, val) => {
	for (let i = arr.length; i > index; i--) {
		arr[i] = arr[i - 1];
	}
	arr[index] = val;
	return arr;
};
var arr = [0, 1, 2, 4, 5];
console.log(insertAt(arr, 3, 3));

// Array: Remove At
console.log("------------------------------------------------------");
const removeAt = (arr, index) => {
	const popThis = arr[index];
	for (let i = index; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.pop();
	return arr;
};
var arr = [0, 1, "take me out", 2, 3, 4];
console.log(removeAt(arr, 2));

// Array: Swap Pairs
console.log("------------------------------------------------------");
const swapPairs = arr => {
	var len;
	if (arr.length % 2 === 0) {
		len = arr.length;
	} else {
		len = arr.length - 1;
	}
	for (let i = 0; i < len; i += 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	return arr;
};
console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs(["Brendan", true, 42]));

// Array: Remove Duplicates
console.log("------------------------------------------------------");
const removeDuplicates = arr => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			// meaning the value is not in the new array
			newArr.push(arr[i]);
		}
	}
	return newArr;
};
console.log(removeDuplicates([1, 2, 3, 3, 2, 1, 0, 5, 0, 3, 3, 1]));
