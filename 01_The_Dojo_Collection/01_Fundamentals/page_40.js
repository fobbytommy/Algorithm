"use strict";

// Array: Min to Front
const minToFront = arr => {
	let minIndex = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[minIndex]) {
			minIndex = i;
		}
	}
	let min = arr[minIndex];
	for (let i = minIndex; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = min;
	return arr;
};
console.log(minToFront([4, 2, 1, 3, 5]));

// Array: Reverse
console.log("---------------------------------------------------");
const reverse = arr => {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
};
var arr = [5, 4, 3, 2, 1];
console.log(reverse(arr));

// Array: Rotate
console.log("---------------------------------------------------");
const rotateArr = (arr, shiftBy) => {
	let newArr = [];
	if (shiftBy > arr.length) {
		shiftBy %= arr.length;
	}
	for (let i = shiftBy; i < arr.length; i++) {
		newArr.push(arr[i]);
	}
	for (let i = 0; i < shiftBy; i++) {
		newArr.push(arr[i]);
	}

	return newArr;
};
var arr = [1, 2, 3, 4, 5];
console.log(rotateArr(arr, 1));
console.log(rotateArr(arr, 2));
console.log(rotateArr(arr, 3));
console.log(rotateArr(arr, 4));
console.log(rotateArr(arr, 5));
console.log(rotateArr(arr, 6));
console.log(rotateArr(arr, 10));

// Array: Filter Range
console.log("---------------------------------------------------");
const filterRange = (arr, min, max) => {
	let i = 0;
	while (i < arr.length) {
		if (arr[i] > min && arr[i] < max) {
			// shift
			for (let j = i; j < arr.length - 1; j++) {
				arr[j] = arr[j + 1];
			}
			// pop
			arr.pop();
			// continue without increment
			continue;
		}
		i++;
	}
	return arr;
};
var arr = [2, 4, 6, 8, 10];
console.log(filterRange(arr, 4, 10));

// Array: Concat
console.log("---------------------------------------------------");
const arrConcat = (arr1, arr2) => {
	let newArr = [];
	arr1.forEach(i => {
		newArr.push(i);
	});
	arr2.forEach(i => {
		newArr.push(i);
	});
	return newArr;
};
console.log(arrConcat(["a", "b"], [1, 2]));

// Skyline Heights
console.log("---------------------------------------------------");
const skylineHeights = arr => {
	let newArr = [];
	arr.forEach(i => {
		if (i > 0 && newArr.indexOf(i) === -1) {
			if (newArr.length === 0) {
				newArr.push(i);
			} else {
				let isBig = false;
				newArr.forEach(j => {
					if (i > j) {
						isBig = true;
					} else {
						isBig = false;
					}
				});
				if (isBig) {
					newArr.push(i);
				}
			}
		}
	});

	return newArr;
};
console.log(skylineHeights([-1, 7, 3]));
console.log(skylineHeights([-1, 1, 1, 7, 3]));
console.log(skylineHeights([0, 4]));
