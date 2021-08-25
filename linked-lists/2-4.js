/**
 * Write code to partition a linked list around a value x, such that all
 * nodes less than x come before all nodes greater than or equal to x.
 * (IMPORTANT: The partition element x can appear anywhere in the "right
 * partition"; it does not need to appear between the left and right partitions.
 * The additional spacing in the example below indicates the partition. Yes,
 * the output below is one of many valid outputs!)
 *
 * EXAMPLE
 * Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
 * Output: 3 -> 1 -> 2       ->     10 -> 5 -> 5 -> 8
 */

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  log() {
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

// SOLUTION 1: time O(N) space O(1)
const partitionList = (list, part) => {
  let node = list.head.next;
  let prev = list.head;
  while (node) {
    if (node.value < part) {
      prev.next = node.next;
      node.next = list.head;
      list.head = node;
      node = prev.next;
    } else {
      prev = node;
      node = node.next;
    }
  }
};

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(8);
const node4 = new Node(5);
const node5 = new Node(10);
const node6 = new Node(2);
const node7 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

const list = new LinkedList(node1);

partitionList(list, 5);
list.log();
