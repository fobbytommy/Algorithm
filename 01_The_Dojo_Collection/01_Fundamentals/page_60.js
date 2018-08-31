"use strict";

// SList: Length
function ListNode(value) {
	if (this instanceof ListNode) {
		this.val = value;
		this.next = null;
	} else {
		return new ListNode(value);
	}
}

function SList(value) {
	this.head = ListNode(value);
	this.nodeLength = 1;
}

SList.prototype = {
	constructor: SList,

	addNode: function(value) {
		let currentNode = this.head;
		while (true) {
			if (currentNode.next !== null) {
				currentNode = currentNode.next;
			} else {
				currentNode.next = ListNode(value);
				this.nodeLength++;
				break;
			}
		}
	}
};

const arr = [1, 2, 12, 4, -5, 6, 7];

let runner = new SList(0);
arr.forEach(num => {
	runner.addNode(num);
});
console.log(runner.nodeLength);

// SList: Max
console.log("----------------------------------------");
SList.prototype.findMax = function() {
	let max = this.head.val;
	let currentNode = this.head.next;
	if (currentNode === null) {
		return max;
	}
	while (true) {
		if (currentNode.val > max) {
			max = currentNode.val;
		}
		if (currentNode.next === null) {
			break;
		}
		currentNode = currentNode.next;
	}
	return max;
};

console.log(runner.findMax());

// SList: Display
console.log("----------------------------------------");
SList.prototype.display = function() {
	let arr = [];
	let currentNode = this.head;
	while (true) {
		arr.push(currentNode.val);
		currentNode = currentNode.next;
		if (currentNode.next === null) {
			arr.push(currentNode.val);
			break;
		}
	}
	return arr.join(" > ");
};

console.log(runner.display());

// SList: Min
console.log("----------------------------------------");
SList.prototype.findMin = function() {
	let min = this.head.val;
	let currentNode = this.head.next;
	if (currentNode === null) {
		return min;
	}
	while (true) {
		if (currentNode.val < min) {
			min = currentNode.val;
		}
		if (currentNode.next === null) {
			break;
		}
		currentNode = currentNode.next;
	}
	return min;
};
console.log(runner.findMin());

// SList: Average
console.log("----------------------------------------");
SList.prototype.findAverage = function() {
	let sum = this.head.val;
	let currentNode = this.head.next;
	if (currentNode === null) {
		return sum;
	}
	while (true) {
		sum += currentNode.val;
		currentNode = currentNode.next;
		if (currentNode.next === null) {
			sum += currentNode.val;
			break;
		}
	}
	return (sum / this.nodeLength).toFixed(1);
};
console.log(runner.findAverage());
