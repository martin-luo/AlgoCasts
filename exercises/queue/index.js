// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }

  add(newValue) {
    this.queue.push(newValue);
  }

  remove() {
    return this.queue.shift();
  }
}

/**
 * This is the provided solutiton for Queue. It is on the opposite of 
 * what I wrote, but the results are the same.
 *
 * @class QueueProvidedSolution
 */
class QueueProvidedSolution {
  constructor() {
    this.data = [];
  }

  add(newValue) {
    this.data.unshift(newValue);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
