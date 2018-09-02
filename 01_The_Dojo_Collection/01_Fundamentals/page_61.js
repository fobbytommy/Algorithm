"use strict";

function ListNode(value) {
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
			if (currentNode.next == null) {
				currentNode.next = ListNode(value);
				break;
			} else {
				currentNode = currentNode.next;
			}
		}
		this.length++;
	}
};

let runner = SList(0);

const arr = [1, 2];

arr.forEach(num => {
	runner.addNode(num);
});

// SList: Back
console.log("------------------------------");
const returnBack = function(node) {
	let currentNode;
	if (typeof node.head !== "undefined") {
		currentNode = node.head;
	} else {
		currentNode = node;
	}
	while (true) {
		if (currentNode.next === null) {
			return currentNode.val;
		} else {
			currentNode = currentNode.next;
		}
	}
};
console.log(returnBack(runner.head.next.next));

// SList: Remove Back
console.log("------------------------------");
SList.prototype.removeBack = function() {
	let currentNode = this.head;
	let prevNode = this;
	while (true) {
		if (currentNode.next === null) {
			if (typeof prevNode.head == "undefined") {
				prevNode.next = null;
				this.length--;
				return currentNode.val;
			} else {
				return "there are none";
			}
		}
		prevNode = currentNode;
		currentNode = currentNode.next;
	}
};
console.log(runner.removeBack());
console.log(runner);

// SList: Add Back
console.log("------------------------------");
SList.prototype.addBack = function(value) {
	let currentNode = this.head;
	while (true) {
		if (currentNode.next === null) {
			currentNode.next = ListNode(value);
			this.length++;
			return this;
		}
		currentNode = currentNode.next;
	}
};
console.log(runner.addBack(2));
