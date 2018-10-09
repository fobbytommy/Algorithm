/*
    Bubble Sort
*/

// Random number generator
const arr = [];
const num = 10;
for (let i = 0; i < num; i++) {
	let ranNum = Math.round(Math.random() * 50);
	arr.push(ranNum);
}
// const arr = [5, 1, 4, 2, 8];

// log before sorting
console.log(arr);

const bubbleSort = arr => {
	let currentLength = arr.length;
	while (currentLength) {
		for (let i = 0; i < currentLength - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				// ES6 swap
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
		// console.log(arr);
		currentLength--;
	}
};

bubbleSort(arr);
console.log(arr);
