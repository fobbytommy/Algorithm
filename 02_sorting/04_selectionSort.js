/*
    Selection Sort
*/

// Random number generator
const arr = [];
const num = 10;
for (let i = 0; i < num; i++) {
	let ranNum = Math.round(Math.random() * 50);
	arr.push(ranNum);
}
// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(arr);

const selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}
		if (i !== minIdx) {
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
		}
		// console.log(arr);
	}
};

selectionSort(arr);
console.log(arr);
