/**
 * Implement an algorithm to delete a node in the middle (ie. any node
 * but the first and last node, not necessarily in the exact middle) of a singly
 * linked list, given only access to that node.
 */

class LinkedList {
  constructor(head) {
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

// O(1) time; O(1) space
const deleteNode = (node_to_delete) => {
  if (!node_to_delete || !node_to_delete.next) {
    throw new Error("Invalid node");
  }
  node_to_delete.value = node_to_delete.next.value;
  node_to_delete.next = node_to_delete.next.next;
};

const node1 = new Node("One");
const node2 = new Node("Two");
const node3 = new Node("Three");
const node4 = new Node("Four");
const node5 = new Node("Five");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const list = new LinkedList(node1);
deleteNode(node3);
list.logValues();
