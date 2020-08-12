// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(record) {
    this.stackA.push(record);
  }

  remove() {
    let nextRecord;

    while (true) {
      nextRecord = this.stackA.pop();
      const recordAfterNext = this.stackA.peek();

      if (recordAfterNext) {
        this.stackB.push(nextRecord);
      } else {
        break;
      }
    }

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    return nextRecord;
  }

  peek() {
    let nextRecord;

    while (true) {
      nextRecord = this.stackA.pop();
      const recordAfterNext = this.stackA.peek();

      if (recordAfterNext) {
        this.stackB.push(nextRecord);
      } else {
        break;
      }
    }

    this.stackA.push(nextRecord);
    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    return nextRecord;
  }
}

module.exports = Queue;
