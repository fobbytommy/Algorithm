"use strict";

// String: Reverse
const reverseString = str => {
	var phrase = str.split("");
	console.log(phrase);
	for (let i = 0; i < phrase.length / 2; i++) {
		var temp = phrase[i];
		phrase[i] = phrase[phrase.length - i - 1];
		phrase[phrase.length - i - 1] = temp;
	}
	return phrase.join("");
};
var str = "creature";
console.log(reverseString(str));

// Remove Even-Length Strings
console.log("-------------------------------------");
const removeEvenLength = arr => {
	var filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length % 2 !== 0) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
};
var arr = ["Nope!", "its", "Kris", "starting", "with", "k!", "(instead", "of", "Chris", "with", "c)", "."];
console.log(removeEvenLength(arr));

// Integer to Roman Numerals
console.log("-------------------------------------");

// Roman Numerals to Integer
console.log("-------------------------------------");

// Parens Valid
const parenthesesValidation = str => {
	var prefixQty = 0,
		postfixQty = 0;
	var result = true;
	for (let i = 0; i < str.length; i++) {
		switch (str.charAt(i)) {
			case "(":
				prefixQty++;
				break;
			case ")":
				postfixQty++;
				break;
			default:
				if (postfixQty > prefixQty) {
					result = false;
				}
		}
	}
	if (postfixQty !== prefixQty) {
		result = false;
	}
	return result;
};
var str = "()xx(x)(0(x3)() ) xxx(x  )";
console.log(parenthesesValidation(str));

// Braces Valid
console.log("-------------------------------------");
const bracesValidation = str => {
	var storedPrefix = [];
	for (let i = 0; i < str.length; i++) {
		if (/\(|{|\[/.test(str.charAt(i))) {
			storedPrefix.push(str.charAt(i));
		}
		if (storedPrefix.length > 0) {
			var currPrefix = storedPrefix[storedPrefix.length - 1];
			// look for }], its false
			if (currPrefix === "(" && str.charAt(i) === ")") {
				storedPrefix.pop();
			} else if (currPrefix === "[" && str.charAt(i) === "]") {
				storedPrefix.pop();
			} else if (currPrefix === "{" && str.charAt(i) === "}") {
				storedPrefix.pop();
			}
		}
	}
	if (storedPrefix.length) {
		return false;
	}
	return true;
};
// var str = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// var str = "D(i{a}l[ t]o)n{e";
// var str = "A(1)s[0(n]0{t) 0}k";
var str = "T(o{is}b[ es ] ev (er) ) [ha {{ha }}ha ]";
console.log(bracesValidation(str));

// String: Is Palindrome
console.log("----------------------------------------------------");
const strictPalindrome = str => {
	for (let i = 0; i < str.length / 2; i++) {
		if (str.charCodeAt(i) !== str.charCodeAt(str.length - 1 - i)) {
			return false;
		}
	}
	return true;
};
// let amIPalindrome = "racecar";
let amIPalindrome = "able was i ere i saw elba";
console.log(strictPalindrome(amIPalindrome));

const doIgnorePalin = str => {
	str = str.replace(/[^A-Za-z]/g, "");
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i).toLowerCase() !== str.charAt(str.length - 1 - i).toLowerCase()) {
			return false;
		}
	}
	return true;
};
// let strPalin = "oho!";
let strPalin = "Able was I, ere I saw Elba";
console.log(doIgnorePalin(strPalin));
