class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getSize(){
        let count = 0;
        let node = this.head;
        while (node) {
            count++
            node = node.next
        }
        return count;
    }

    clear(){
        this.head = null;
        return this
    }

    getLast(){
        let node = this.head;
        while (node.next) {
            node = node.next
        }
        return node
    }

    getFirst(){
        return this.head
    }
}

let node1 = new ListNode(3)
let node2 = new ListNode(4)
node1.next = node2

let list = new LinkedList(node1)
console.log(list.head.next.data)
console.log(list.getSize())
console.log(list.getLast())
console.log(list.getFirst())
console.log(list.clear())
