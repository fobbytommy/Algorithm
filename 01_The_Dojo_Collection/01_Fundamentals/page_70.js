"use strict";

function Node(value) {
	// make it scope-safe constructor
	if (new.target == Node) {
		this.val = value;
		this.next = null;
	} else {
		// call it with new to use [[construct]] internal method
		return new Node(value);
	}
}

function SLQueue() {
	if (new.target == SLQueue) {
		this.head = null;
		this.tail = null;
		this.length = 0; // initial num of vals in Queue
	} else {
		// make it scope safe constructor
		return new SLQueue();
	}
}

SLQueue.prototype.display = function() {
	let valueArr = [];
	let currNode = this.head;
	for (let i = 0; i < this.length; i++) {
		valueArr.push(currNode.val);
		currNode = currNode.next;
	}

	console.log(`values: ${valueArr.join(" > ")} \nqueue length: ${this.length}`);
};

// * * * * * create instance called 'queue' * * * * *
const queue = new SLQueue();

console.log("----------------------------------------");
// SLQueue: Enqueue
SLQueue.prototype.enqueue = function(val) {
	// if head is null then assign head
	// and assign that same val to tail as well
	if (this.head === null) {
		this.head = Node(val);
		this.tail = Node(val);
		this.length++;
	} else {
		let currNode = this.head;
		while (true) {
			if (currNode.next === null) {
				currNode.next = Node(val);
				this.tail = Node(val);
				this.length++;
				break;
			}
			currNode = currNode.next;
		}
	}
};
const arr = [0, 1, 2, 3];
arr.forEach(num => {
	queue.enqueue(num);
});
queue.display();

console.log("----------------------------------------");
// SLQueue: Dequeue
SLQueue.prototype.dequeue = function() {
	if (this.length > 0) {
		const frontVal = this.head.val;
		this.head = this.head.next;
		this.length--;
		return frontVal;
	}
};
console.log(queue.dequeue());
queue.display();

// SLQueue: Front
SLQueue.prototype.front = function() {
	if (this.length > 0) {
		return this.head.val;
	}
};
console.log(queue.front());

console.log("----------------------------------------");
// SLQueue: Contains
SLQueue.prototype.contains = function(val) {
	if (this.length > 0) {
		let currNode = this.head;
		while (true) {
			if (currNode.val === val) {
				return true;
			}
			if (currNode.next === null) {
				return false;
			}
			currNode = currNode.next;
		}
	} else {
		throw new Error("There are currently 0 queue");
	}
};
console.log(queue.contains(2)); // true
console.log(queue.contains(3)); // true
console.log(queue.contains("2")); // false

console.log("----------------------------------------");
// SLQueue: Is Empty
SLQueue.prototype.isEmpty = function() {
	if (this.length === 0) {
		return true;
	}
	return false;
};
console.log(queue.isEmpty());

console.log("----------------------------------------");
// SLQueue: Size
SLQueue.prototype.size = function() {
	return this.length;
};
console.log(queue.size());

console.log("----------------------------------------");
// SLQueue: Compare Queues
const compareQueues = (q1, q2) => {
	if (q1.length !== q2.length) {
		return false;
	}
	let q1current = q1.head;
	let q2current = q2.head;
	for (let i = 0; i < q1.length; i++) {
		if (q1current.val !== q2current.val) {
			return false;
		}
		q1current = q1current.next;
		q2current = q2current.next;
	}
	return true;
};
const queue2 = new SLQueue();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log(compareQueues(queue, queue2));

console.log("----------------------------------------");
// SLQueue: Remove Min
SLQueue.prototype.removeMin = function() {
	if (this.length > 1) {
		let min = this.head.val;
		let currNode = this.head.next;
		let minIndex = 0;
		let currIndex = 0;
		while (true) {
			currIndex++;
			if (currNode.val < min) {
				min = currNode.val;
				minIndex = currIndex;
			}
			if (currNode.next === null) {
				break;
			}
			currNode = currNode.next;
		}
		// console.log(min, minIndex, currIndex);
		if (minIndex === 0) {
			// the min value is in the head
			// remove the head
			this.head = this.head.next;
			this.length--;
		} else if (minIndex === currIndex) {
			// min value is at the tail
			let currNode = this.head;
			// traverse to one before the last node in the queue
			for (let i = 0; i < currIndex - 1; i++) {
				currNode = currNode.next;
			}
			// set to null & assign new tail
			currNode.next = null;
			this.tail = currNode;
			this.length--;
		} else {
			// the min value is in the middle of the queue
			let currNode = this.head;
			// traverse to one node before the min node
			for (let i = 0; i < minIndex - 1; i++) {
				currNode = currNode.next;
			}
			currNode.next = currNode.next.next;
			while (currNode.next !== null) {
				currNode = currNode.next;
			}
			this.tail = currNode;
			this.length--;
		}
	}
};

const newQ = new SLQueue();
const newVals = [0, -5, 2, 10, -40];
newVals.forEach(num => {
	newQ.enqueue(num);
});
newQ.display();
newQ.removeMin();
newQ.display();
console.log(newQ.tail);
