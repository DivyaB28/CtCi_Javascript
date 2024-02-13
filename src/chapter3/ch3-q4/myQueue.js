/**
 * Queue via stacks:
 * Implement a MyQueue class which implements a queue via stacks
 */

/**
 * Queues and Stacks have different orders for extracting items. To create a
 * queue with stacks we have two stacks, one for inserting items and one for
 * extracting them. When dequeuing an item if the extract stack is empty we
 * use queue operations to pop all the items off the insert stack onto the
 * extract stack which will now be in the right order for a queue.
 *
 * N = |MyQueue|
 * Time: enqueue O(1), dequeue O(N)
 * Additional space: O(N) - to hold the input items
 */

const Stack = require("../utils/Stack");

class MyQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
    this.backup = true;
  }

  add(val) {
    if (!this.backup) {
      while (!this.front.isEmpty()) {
        this.back.push(this.front.pop());
      }
      this.backup = true;
    }
    this.back.push(val);
  }

  remove() {
    if (this.backup) {
      while (!this.back.isEmpty()) {
        this.front.push(this.back.pop());
      }
      this.backup = false;
    }
    return this.front.pop();
  }

  peek() {
    if (this.backup) {
      while (!this.back.isEmpty()) {
        this.front.push(thi.back.pop());
      }
      this.backup = false;
    }
    return this.front.peek();
  }

  isEmpty() {
    return this.front.isEmpty() && this.back.isEmpty();
  }
}

/* TEST */
var m = new MyQueue();
console.log(m.isEmpty(), true);

m.add("a");
m.add("b");
m.add("c");
m.add("d");
m.add("e");
m.remove();
console.log(m.peek(), "b");
