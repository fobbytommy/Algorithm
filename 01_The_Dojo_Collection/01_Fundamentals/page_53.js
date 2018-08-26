"use strict";

// Is Word Alphabetical
const isAlphabetical = word => {
	let wordLowercase = word.toLowerCase();
	let codeNum = wordLowercase.charCodeAt(0);
	for (let i = 1; i < wordLowercase.length; i++) {
		if (wordLowercase.charCodeAt(i) >= codeNum) {
			codeNum = wordLowercase.charCodeAt(i);
		} else {
			return false;
		}
	}
	return true;
};
// let word = "facetiously";
let word = "AbCdE";
console.log(isAlphabetical(word));

// D Gets Jiggy
console.log("-----------------------------------");
const dJiggy = name => {
	let firstLetter = name.charAt(0);
	let rest = name.split("");
	rest.splice(0, 1);
	rest[0] = rest[0].toUpperCase();
	rest = rest.join("");
	return `${rest} to the ${firstLetter}!`;
};
let name = "Tommy";
console.log(dJiggy(name));
