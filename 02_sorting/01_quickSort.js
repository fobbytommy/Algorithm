/*
    Quick Sort
*/

// Divide and Conquer

// Random number generator
const arr = [];
const num = 10;
for (let i = 0; i < num; i++) {
	let ranNum = Math.round(Math.random() * 50);
	arr.push(ranNum);
}
// const arr = [3, 1, 2, 5, 4];

// log before sorting
console.log(arr);

const quickSort = (arr, lo = 0, hi = arr.length - 1) => {
	if (lo < hi) {
		let p = partition(arr, lo, hi);
		quickSort(arr, lo, p - 1);
		quickSort(arr, p + 1, hi);
	}
};

const partition = (arr, lo, hi) => {
	let pivot = arr[hi];
	let i = lo;
	for (let j = lo; j < hi; j++) {
		if (arr[j] < pivot) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	[arr[hi], arr[i]] = [arr[i], arr[hi]];
	// console.log(arr);

	return i; // index of the current pivot after the comparison
};

// run quick sort function and log arr for sorted array
quickSort(arr);
console.log(arr);
