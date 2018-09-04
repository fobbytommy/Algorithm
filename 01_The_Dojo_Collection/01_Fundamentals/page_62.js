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

SList.prototype.addNode = function(value) {
	let currentNode = this.head;
	while (true) {
		if (currentNode.next === null) {
			currentNode.next = ListNode(value);
			this.length++;
			break;
		} else {
			currentNode = currentNode.next;
		}
	}
};

SList.prototype.displayList = function() {
	let arr = [];
	let currentNode = this.head;
	while (true) {
		arr.push(currentNode.val);
		// console.log(arr);
		if (currentNode.next === null) {
			return arr.join(" > ");
		}
		currentNode = currentNode.next;
	}
};

let runner = SList(0);

const arr = [5, -4, 3, 10, -2, 2];
arr.forEach(num => {
	runner.addNode(num);
});

// SList: Move Min to Front
console.log("----------------------------------");
SList.prototype.minToFront = function() {
	if (this.length < 2) {
		return this.head;
	}
	let minNode = this.head;
	let minPos = 1,
		currentPos = 1;
	let currentNode = this.head.next;

	while (true) {
		if (currentNode.val < minNode.val) {
			minPos = currentPos;
			minNode = currentNode;
		}
		if (currentNode.next === null) {
			if (minPos == 1) {
				// this is when this.head is already the min
				break;
			}
			// we reach the end of the SList
			// for loop to the one node before minPosition
			let nextNode = minNode.next;
			let prevNode = this.head;
			for (let i = 0; i < minPos - 1; i++) {
				prevNode = prevNode.next;
			}
			// connect that node to the min's next node
			prevNode.next = nextNode;
			// console.log(minPos);
			// console.log(nextNode);

			// move minNode to the front
			let temp = this.head;
			this.head = minNode;
			this.head.next = temp;
			break;
		}
		currentNode = currentNode.next;
		currentPos++;
	}
};
console.log(runner.displayList());
runner.minToFront();
console.log(runner.displayList());

// SList: Move Max to Back
console.log("----------------------------------");
SList.prototype.maxToBack = function() {
	if (this.length < 2) {
		return this.head;
	}
	let maxNode = this.head;
	let maxPos = 0,
		currentPos = 1;
	let currentNode = this.head.next;

	while (true) {
		if (currentNode.val > maxNode.val) {
			maxPos = currentPos;
			maxNode = currentNode;
		}
		if (currentNode.next === null) {
			if (maxNode.next === null) {
				// already at the back of the linked list
				break;
			}
			if (maxPos === 0) {
				// the max value is in the head
				let temp = this.head;
				this.head = temp.next;
				maxNode.next = null;
				currentNode.next = maxNode;
				break;
			}
			// console.log(maxPos);
			// we reach the end of the SList
			// for loop to the one node before minPosition
			let nextNode = maxNode.next;
			let prevNode = this.head;
			for (let i = 0; i < maxPos - 1; i++) {
				prevNode = prevNode.next;
			}
			// connect that node to the max's next node
			prevNode.next = nextNode;
			// console.log(prevNode);
			// console.log(nextNode);

			// move maxNode to the front
			// console.log(this.head);
			// console.log(currentNode);
			// console.log(maxNode);
			maxNode.next = null;
			currentNode.next = maxNode;
			break;
		}

		currentNode = currentNode.next;
		currentPos++;
	}
};
console.log(runner.displayList());
runner.maxToBack();
console.log(runner.displayList());
