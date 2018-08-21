"use strict";

// Remove Blanks
const removeBlanks = str => {
	str = str.replace(/ /g, "");
	return str;
};
var str = " Pl      ayTha tF    u  nkyM   usi   c  ";
console.log(removeBlanks(str));

// String: Get Digits
console.log("------------------------------------------------");
const getDigits = str => {
	var num = "";
	str.split("").forEach(i => (!isNaN(i) ? (num += i) : ""));
	return parseInt(num);
};
var str = "0s1a3y5w7h9a2t4?6!8?0";
console.log(getDigits(str));

// Acronyms
console.log("------------------------------------------------");
const acronyms = str => {
	var acronym = "";
	str.split(" ").forEach(i => {
		if (i) {
			acronym += i.charAt(0).toUpperCase();
		}
	});
	return acronym;
};
var str = " there's no free lunch - gotta pay yer way. ";
console.log(acronyms(str));
var str = "Live from New York, it's Saturday Night!";
console.log(acronyms(str));

// Count Non-Spaces
console.log("------------------------------------------------");
const countNonSpaces = str => {
	// delete spaces and count
	var count = str.replace(/ /g, "").length;
	return count;
};
var str = "Honey pie, you are driving me crazy";
console.log(countNonSpaces(str));

// Remove Shorter Strings
console.log("------------------------------------------------");
const removeShorterStrings = arr => {
	var arrLength = arr.length;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length < arrLength) {
			arr.splice(i, 1);
		}
	}
	return arr;
};
var arr = ["hello", "hi", "im cool", "naw"];
console.log(removeShorterStrings(arr));
