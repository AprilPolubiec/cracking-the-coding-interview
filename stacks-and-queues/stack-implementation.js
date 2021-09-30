// From https://www.youtube.com/watch?v=1AJ4ldcH2t4
const stack = [];

// push
stack.push("dog");
stack.push("cat");
stack.push("bear");
console.log(stack);

// pop
console.log(stack.pop());
console.log(stack);

// peek
console.log(stack[stack.length - 1]);

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(el) {
    this.size++;
    this.storage[this.size] = el;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const class_stack = new Stack();
class_stack.push('dog')
class_stack.push('cat')
class_stack.push('bear')

console.log(class_stack)

console.log(class_stack.pop())
console.log(class_stack)

console.log(stack.peek())