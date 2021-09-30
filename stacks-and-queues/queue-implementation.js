// https://www.youtube.com/watch?v=1AJ4ldcH2t4

const queue = [];

// enqueue
queue.push("seahorse");
queue.push("dolphin");
queue.push("whale shark");

console.log(queue);

// dequeue
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(el) {
    this.storage[this.tail] = el;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const new_queue = new Queue();
new_queue.enqueue("seahorse");
new_queue.enqueue("dolphin");
new_queue.enqueue("whale shark");
console.log(new_queue);

console.log(new_queue.dequeue());
console.log(new_queue);
