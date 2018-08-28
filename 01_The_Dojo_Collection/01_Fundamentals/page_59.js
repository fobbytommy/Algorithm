"use strict";

// Create Line with List of people
function ListNode(value) {
	if (this instanceof ListNode) {
		this.val = value;
		this.next = null;
	} else {
		return new ListNode(value);
	}
}

const people = ["Tommy", "James", "Tad", "Rob", "Alice", "Christine"];

let line;

people.forEach(person => {
	if (typeof line === "undefined") {
		// create a head
		line = ListNode(person);
	} else {
		// find next === null, then add a node
		let currentNode = line;
		while (true) {
			if (currentNode.next !== null) {
				currentNode = currentNode.next;
			} else {
				currentNode.next = ListNode(person);
				// console.log(currentNode.next);
				break;
			}
		}
	}
});

// List: Add Front
console.log("---------------------------------------------------------");
let newLine = ListNode("Andy");
newLine.next = line;
console.log(newLine);

// List: Remove Front
console.log("---------------------------------------------------------");
let restoreLine = newLine.next;
console.log(restoreLine);

// List: Contains
console.log("---------------------------------------------------------");
const findPersonInLine = (line, person) => {
	var currentNode = line;
	let index = 0;
	while (true) {
		if (currentNode.val === person) {
			return [person, index];
		} else if (currentNode.next === null) {
			return ["not found", -1];
		} else {
			currentNode = currentNode.next;
			index++;
			// console.log(index);
		}
	}
};
console.log(findPersonInLine(restoreLine, "Christine"));
console.log(findPersonInLine(restoreLine, "Tad"));
console.log(findPersonInLine(restoreLine, "Ami"));

// List: Front
console.log("---------------------------------------------------------");
const returnHead = line => {
	return line.val;
};
console.log(returnHead(restoreLine));
