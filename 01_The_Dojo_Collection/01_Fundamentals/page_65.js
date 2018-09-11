"use strict";

function ListNode(value) {
	if (this instanceof ListNode) {
		this.val = value;
		this.next = null;
	} else {
		return new ListNode(value);
	}
}

function SList(initialVal) {
	if (this instanceof SList) {
		this.head = ListNode(initialVal);
		this.length = 1;
	} else {
		return new SList(initialVal);
	}
}

SList.prototype = {
	constructor: SList,

	addNode: function(value) {
		let currentNode = this.head;
		while (true) {
			if (currentNode.next === null) {
				currentNode.next = ListNode(value);
				this.length++;
				break;
			}
			currentNode = currentNode.next;
		}
	},

	display: function() {
		const arr = [];
		let currentNode = this.head;
		while (true) {
			arr.push(currentNode.val);
			if (currentNode.next === null) {
				break;
			}
			currentNode = currentNode.next;
		}
		console.log(`nodes: ${arr.join(" > ")} \nlength: ${this.length}`);
	}
};

const runner = SList(0);

const arr = [2, -4, 7, 6, 3, 10, -10, 4];
arr.forEach(num => {
	runner.addNode(num);
});

runner.display();

// SList: Second Largest Value
SList.prototype.secondLargest = function() {
	if (this.length < 2) {
		throw new Error("You need to have more than one node in the singly linked list");
	}
	let max, secondMax;
	if (this.head.val >= this.head.next.val) {
		max = this.head.val;
		secondMax = this.head.next.val;
	} else {
		secondMax = this.head.val;
		max = this.head.next.val;
	}
	let currentNode = this.head.next;
	while (true) {
		if (currentNode.next === null) {
			return secondMax;
			break;
		}
		if (currentNode.val > max) {
			secondMax = max;
			max = currentNode.val;
		} else if (currentNode.val > secondMax) {
			secondMax = currentNode.val;
		}
		currentNode = currentNode.next;
	}
};
console.log(runner.secondLargest());

// Zip SLists
const zipSlists = (list1, list2) => {
	// initialize both heads
	let combinedList = new SList(list1.head.val);
	combinedList.addNode(list2.head.val);
	let curOneNode = list1.head.next,
		curTwoNode = list2.head.next;
	while (true) {
		if (curOneNode === null && curTwoNode === null) {
			break;
		} else if (curOneNode === null) {
			combinedList.addNode(curTwoNode.val);
			curTwoNode = curTwoNode.next;
		} else if (curTwoNode === null) {
			combinedList.addNode(curOneNode.val);
			curOneNode = curOneNode.next;
		} else {
			combinedList.addNode(curOneNode.val);
			combinedList.addNode(curTwoNode.val);
			curOneNode = curOneNode.next;
			curTwoNode = curTwoNode.next;
		}
	}
	return combinedList;
};

const secondRunner = SList(1);
secondRunner.addNode(4);
secondRunner.addNode(6);
secondRunner.display();

// zipSlists(runner, secondRunner).display();
zipSlists(secondRunner, runner).display();
