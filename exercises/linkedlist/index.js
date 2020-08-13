// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.listSize = 0;
  }

  insertFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  getFirst() {
      return this.head;
  }
}

module.exports = { Node, LinkedList };
