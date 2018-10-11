/*
    Insertion Sort
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

const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[i]) {
				[arr[j], arr[i]] = [arr[i], arr[j]];
			}
		}
		// console.log(arr);
	}
};

insertionSort(arr);
console.log(arr);
