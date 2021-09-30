/**
 * Imagine a literal stack of plates. If the stack gets too high, it might topple.
 * Therefore in real life we would likely start a new stack when the previous stack
 * exceeds some threshold. Implement a data structure called setOfStacks that mimics
 * this. SetOfStacks should be composed of several stacks and should create a new
 * stack once the previous one exceeds capacity. SetOfStacks.push*() and
 * SetOfStacks.pop() should behave identically to a single stack (that is pop() should
 * return the same values as it would if there was just a single stack).
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

class SetOfStacks {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.stacks = [new Stack()];
  }

  push(val) {
    if (this.stacks[this.stacks.length - 1].size() === this.capacity) {
      this.stacks.push(new Stack());
    }
    this.stacks[this.stacks.length - 1].push(val);
  }

  pop() {
    if (this.stacks[this.stacks.length - 1].size() === 0) {
      this.stacks.pop();
    }
    return this.stacks[this.stacks.length - 1].pop();
  }
}

const stacks = new SetOfStacks(3);
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
console.log(stacks);
console.log(stacks.pop())
console.log(stacks.pop())
console.log(stacks.pop())
console.log(stacks.pop())