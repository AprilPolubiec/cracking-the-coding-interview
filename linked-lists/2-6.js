/**
 * Implement a function to check if a linked list is a palindrome.
 */

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  log() {
    let node = this.head;
    let vals = [];
    while (node) {
      vals.push(node.value);
      node = node.next;
    }
    console.log(vals);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const isPalindrome = (list) => {
  let node = list.head;
  let chars_seen = new Set();
  while (node) {
    if (chars_seen.has(node.value)) {
      chars_seen.delete(node.value);
    } else {
      chars_seen.add(node.value);
    }
    node = node.next;
  }
  return chars_seen.size <= 1;
};

const node1 = new Node("a");
const node2 = new Node("b");
const node3 = new Node("a");
const node4 = new Node("b");

node1.next = node2;
node2.next = node3;
node3.next = node4;

const list = new LinkedList(node1);

console.log(isPalindrome(list));
