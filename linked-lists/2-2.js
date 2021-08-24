/**
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */

class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// SOLUTION 1: O(N) time, O(N) space
// const findKthToLast = (list, k) => {
//   if (k < 1) {
//     throw new Error("k must be greater than 1");
//   }
//   let node = list.head;
//   let nodes = [];
//   while (node) {
//     nodes.push(node);
//     node = node.next;
//   }
//   return nodes[nodes.length - k];
// };

// SOLUTION 2: O(N) time, O(1) space
const findKthToLast = (list, k) => {
  if (k < 1) {
    throw new Error("k must be greater than 1");
  }
  let start_node = list.head;
  let end_node = list.head;
  let dist = 0;
  while (end_node) {
    if (dist < k) {
      end_node = end_node.next;
      dist++;
    } else {
      start_node = start_node.next;
      end_node = end_node.next;
    }
  }
  return start_node;
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

console.log(findKthToLast(list, 3));
