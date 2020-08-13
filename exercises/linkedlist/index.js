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
    this.head = new Node(data, this.head);
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
    this.listSize = 0;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
      this.listSize--;
    }
  }

  removeLast() {
    if (this.head) {
      if (!this.head.next) {
        this.head = null;
        this.listSize--;
      } else {
        let node = this.head;
        while (node.next && node.next.next) {
          node = node.next;
        }

        node.next = null;
        this.listSize--;
      }
    }
  }

  insertLast(data) {
    const last = this.getLast();
    const newNode = new Node(data);
    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }

    this.listSize++;
  }
}

module.exports = { Node, LinkedList };
