class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    pushNode(new_node) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new_node;
        return this;
    }

    pushValue(val) {
        let node = new Node(val);
        this.pushNode(node)
        return this;
    }

    pushNodeToFront(new_node) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new_node;
        return this;
    }

    pushValueToFront(val) {
        let node = new Node(val);
        this.pushNode(node)
        return this;
    }

    getFirst() {

    }

    getLast() {
        
    }

    size(){
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

const node1 = new Node("One");
const node2 = new Node("Two")
node1.next = node2;
const node3 = new Node("Three")

const list = new LinkedList(node1);
console.log(list.size())

list.pushNode(node3)
console.log(list.size())

list.pushValue("Four")
console.log(list.size())


