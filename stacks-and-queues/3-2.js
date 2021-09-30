// How would you design a stack which, in addition to push and pop, has a
// function min which returns the minimum element? push, pop and min should
// all be in O(1) time.

class Stack {
  constructor() {
    this.stack = [];
    this.min_stack = [];
  }

  push(val) {
    if (
      val <= this.min_stack[this.min_stack.length - 1] ||
      this.min_stack.length === 0
    ) {
      this.min_stack.push(val);
    }
    console.log(this.min_stack)
    this.stack.push(val);
  }

  pop() {
    const deleted = this.stack.pop();
    if (deleted === this.min_stack[this.min_stack.length - 1]) {
      this.min_stack.pop();
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.min_stack[this.min_stack.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(0);
stack.push(8);

console.log(stack.min());
