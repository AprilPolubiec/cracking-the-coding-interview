/**
 * You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's
 * digit is at the head of the list. Write a function that adds the two numbers
 * and returns the sum as a linked list. (You can't just convert the linked list
 * to an integer).
 *
 * EXAMPLE:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) That is, 617 + 295
 * Output: 2 -> 1 -> 9
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

// SOLUTION 1: O(A + B) time
const sumLists = (num1, num2) => {
  let sum_node = null;
  let sum_list = new LinkedList();
  let node_1 = num1.head;
  let node_2 = num2.head;
  let remainder = 0;
  while (node_1 && node_2) {
    let sum = node_1.value + node_2.value + remainder;
    if (sum >= 10) {
      remainder = Math.floor(sum / 10);
      sum = sum % 10;
    }
    if (sum_node) {
      sum_node.next = new Node(sum);
      sum_node = sum_node.next;
    } else {
      sum_node = new Node(sum);
      sum_list.head = sum_node;
    }
    node_1 = node_1.next;
    node_2 = node_2.next;
  }
  return sum_list;
};

const node1 = new Node(7);
const node2 = new Node(1);
const node3 = new Node(6);

node1.next = node2;
node2.next = node3;

const node4 = new Node(5);
const node5 = new Node(9);
const node6 = new Node(2);

node4.next = node5;
node5.next = node6;

const list1 = new LinkedList(node1);
const list2 = new LinkedList(node4);

const sum = sumLists(list1, list2);
sum.log();
