"use strict";

function ListNode(value) {
	// scope-safe constructor
	if (this instanceof ListNode) {
		this.val = value;
		this.next = null;
	} else {
		return new ListNode(value);
	}
}

function SList(value) {
	if (this instanceof SList) {
		this.head = ListNode(value);
		this.length = 1;
	} else {
		return new SList(value);
	}
}

SList.prototype = {
	constructor: SList,
	addNode: function(value) {
		let currentNode = this.head;
		while (true) {
			if (currentNode.next === null) {
				currentNode.next = ListNode(value);
				break;
			}
			currentNode = currentNode.next;
		}
		this.length++;
	},
	display: function() {
		let values = [];
		let currentNode = this.head;
		while (true) {
			values.push(currentNode.val);
			if (currentNode.next === null) {
				console.log(values.join(" > "));
				break;
			}
			currentNode = currentNode.next;
		}
	}
};

let runner = SList(0);
let arr = [2, 6, -1, 5];
// let arr = [2];

arr.forEach(num => {
	runner.addNode(num);
});

runner.display();

// SList: Second to Last Value
console.log("------------------------------------");
SList.prototype.secondToLast = function() {
	if (this.length < 2) {
		return null;
	}
	let prevNode = this.head;
	let currentNode = this.head.next;
	while (true) {
		if (currentNode === null) {
			return prevNode.val;
		}
		prevNode = currentNode;
		currentNode = currentNode.next;
	}
};
console.log(runner.secondToLast());

// SList: Copy
console.log("------------------------------------");
SList.prototype.copyList = function() {
	let copy = SList(this.head.val);
	let currentNode = this.head.next;
	while (true) {
		if (currentNode === null) {
			return copy;
		}
		copy.addNode(currentNode.val);
		currentNode = currentNode.next;
	}
};
let copy = runner.copyList();
console.log(copy);

// SList: Remove Node
console.log("------------------------------------");
SList.prototype.removeNode = function(index) {
	if (index >= this.length) {
		return null;
	}
	if (index == 0) {
		// we are in the head
		this.head = this.head.next;
		this.length--;
		return;
	}
	let prevNode = this.head;
	let currentNode = this.head.next;
	for (let i = 0; i < index - 1; i++) {
		// console.log(currentNode.val);
		prevNode = currentNode;
		currentNode = currentNode.next;
	}
	if (currentNode.next === null) {
		prevNode.next = null;
	} else {
		prevNode.next = currentNode.next;
	}
	this.length--;
};
runner.removeNode(1);
// runner.removeNode(4);
runner.display();
runner.addNode(8);
runner.display();

// SList: Filter
console.log("------------------------------------");
SList.prototype.filter = function(lowVal, highVal) {
	let currentNode = this.head;
	let index = 0;
	while (true) {
		if (currentNode.val < lowVal || currentNode.val > highVal) {
			this.removeNode(index);
			index--; // since we removed the node
		}
		if (currentNode.next === null) {
			break;
		}
		currentNode = currentNode.next;
		index++;
	}
};
runner.filter(4, 9);
runner.display();
