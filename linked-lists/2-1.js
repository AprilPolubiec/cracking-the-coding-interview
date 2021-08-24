/**
 * Write code to remove duplicates from an unsorted linked list.
 */

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  logValues() {
    let node = this.head;
    let values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const removeDupes = (list) => {
  let node = list.head;
  let values = new Set();
  let previous_node = null;
  while (node) {
    if (values.has(node.value)) {
      previous_node.next = node.next;
    } else {
      values.add(node.value);
    }
    previous_node = node;
    node = node.next;
  }
  list.logValues();
  return list;
};

const node1 = new Node("One");
const node2 = new Node("Two");
const node3 = new Node("One");
const node4 = new Node("Four");
const node5 = new Node("Two");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const list = new LinkedList(node1);

removeDupes(list);
