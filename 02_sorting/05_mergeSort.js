/*
    Merge Sort
*/

// divide and conquest similar to quick sort!

// Random number generator
const arr = [];
const num = 10;
for (let i = 0; i < num; i++) {
	let ranNum = Math.round(Math.random() * 50);
	arr.push(ranNum);
}
// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(arr);

const mergeSort = arr => {
	// ***do it recursively, so create base case..no shit.. come on***
	if (arr.length <= 1) {
		return arr;
	}

	const left = [],
		right = [];
	const halfLength = arr.length / 2;
	for (let i = 0; i < arr.length; i++) {
		if (i < halfLength) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const sortedArr = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		} else {
			sortedArr.push(right.shift());
		}
		// console.log(1);
	}

	while (left.length) {
		sortedArr.push(left.shift());
		// console.log(2);
	}
	while (right.length) {
		sortedArr.push(right.shift());
		// console.log(3);
	}
	return sortedArr;
};

// takes up so much space!
const sortedList = mergeSort(arr);
console.log(sortedList);
