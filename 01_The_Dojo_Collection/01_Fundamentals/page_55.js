// Zip Arrays into Map
const zipArrays = (arr1, arr2) => {
	let obj = {};
	for (let i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}
	return obj;
};
let arr1 = ["abc", 3, "yo"],
	arr2 = [42, "wassup", true];
console.log(zipArrays(arr1, arr2));

// Invert Hash
console.log("-------------------------------------------------");
const invertHash = obj => {
	let invertObj = {};
	for (let key in obj) {
		invertObj[obj[key]] = key;
	}
	return invertObj;
};
let hash = {
	name: "Zaphod",
	charm: "high",
	morals: "dicey"
};
console.log(invertHash(hash));

// Array: Number of Values (without using .length)
console.log("-------------------------------------------------");
const numOfValues = obj => {
	let count = 0;
	for (let key in obj) {
		count++;
	}
	return count;
};
let obj2 = {
	band: "Travis Shredd & the Good Ol' Homeboys",
	style: "Country/Metal/Rap",
	album: "668: The Neighbor of the Beast"
};
console.log(numOfValues(obj2));

// String.concat
console.log("------------------------------------------------");
console.log("hello".concat(", ", "how ", "are ", "you", "?"));

// String.slice
console.log("------------------------------------------------");
let arr3 = [1, 2, 3, 4, "meh", 5, 6];
arr3 = [...arr3.slice(0, 4), ...arr3.slice(5)];
console.log(arr3);

// String.trim
console.log("------------------------------------------------");
console.log(" \n hello gootbye \t   ".trim());

// String.split
console.log("------------------------------------------------");
console.log("a:b:c:d:e".split(":"));

// String.search
console.log("------------------------------------------------");
console.log("Tommy Oh is gonna be rich!".search("poor"));
console.log("Tommy Oh is gonna be rich!".search("Oh"));
