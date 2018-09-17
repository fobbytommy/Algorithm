"use strict";
// push, pop, top vs enqueue, dequeue, front

function Node(val) {
	// scope-safe contructor
	if (new.target === Node) {
		this.val = val;
		this.next = null;
	} else {
		return new Node(val);
	}
}

function SLStack() {
	// scope-safe contructor
	if (new.target === SLStack) {
		this.top = null; // top of the stacks
		this.length = 0; // num of the stacks
		return this;
	} else {
		return new SLStack();
	}
}

SLStack.prototype = {
	constructor: SLStack,
	display: function() {
		if (this.length > 0) {
			const valArr = [];
			let currNode = this.top;
			while (true) {
				valArr.push(currNode.val);
				if (currNode.next === null) {
					break;
				}
				currNode = currNode.next;
			}
			console.log(`Stack (top > bottom): ${valArr.join(" > ")} \nLength: ${this.length}`);
			return this;
		}
	}
};

// create instance called 'stack'
const stack = SLStack();

console.log("---------------------------------------");
// SLStack: Push
SLStack.prototype.push = function(val) {
	let temp = this.top;
	this.top = new Node(val);
	this.top.next = temp;
	this.length++;
	return this;
};
stack
	.push(0)
	.push(1)
	.push(2)
	.display();

console.log("---------------------------------------");
// SLStack: Pop
SLStack.prototype.pop = function(val) {
	if (this.length > 0) {
		let temp = this.top;
		if (this.length === 1) {
			const poppedVal = this.top.val;
			this.top = null;
			this.length--;
			return poppedVal;
		} else {
			const poppedVal = this.top.val;
			this.top = this.top.next;
			this.length--;
			return poppedVal;
		}
	}
	throw new Error("Stack is EMPTY!");
};
console.log(stack.pop());
stack.display();

console.log("---------------------------------------");
// SLStack: Top
SLStack.prototype.topStack = function() {
	if (this.length > 0) {
		return this.top.val;
	}
	throw new Error("Stack is EMPTY!");
};
console.log(stack.topStack());

console.log("---------------------------------------");
// SLStack: Contains
SLStack.prototype.contains = function(val) {
	if (this.length > 0) {
		let currNode = this.top;
		while (true) {
			if (currNode.val === val) {
				return true;
			}
			if (currNode.next === null) {
				return false;
			}
			currNode = currNode.next;
		}
	}
	throw new Error("Stack is EMPTY!");
};
stack
	.push(4)
	.push(6)
	.push(5);
stack.display();
console.log(stack.contains(0)); // true
console.log(stack.contains(7)); // false
console.log(stack.contains(4)); // true
console.log(stack.contains("4")); // false

console.log("---------------------------------------");
// SLStack: Is Empty
SLStack.prototype.isEmpty = function() {
	if (!this.length) {
		return true;
	}
	return false;
};
const emptyStack = new SLStack();
console.log(emptyStack.isEmpty());
console.log(stack.isEmpty());

console.log("---------------------------------------");
// SLStack: Size
SLStack.prototype.size = function() {
	return this.length;
};
console.log(emptyStack.size());
console.log(stack.size());

console.log("---------------------------------------");
// Compare Stacks
const compareStacks = (s1, s2) => {
	if (s1.length === s2.length) {
		let s1current = s1.top;
		let s2current = s2.top;
		for (let i = 0; i < s1.length; i++) {
			if (s1current.val !== s2current.val) {
				return false;
			}
			s1current = s1current.next;
			s2current = s2current.next;
		}
		return true;
	} else {
		// stack is not same
		return false;
	}
};
const stack1 = new SLStack()
	.push(1)
	.push(2)
	.push(3);
const stack2 = new SLStack()
	.push(1)
	.push(2)
	.push(3);
console.log(compareStacks(stack1, stack2)); // true
console.log(compareStacks(stack1, stack)); // false
