let Stack = require("../utils/Stack");

class MinStack extends Stack {
  constructor() {
    super();

    this._minStack = new Stack();
    this._min = null;
  }

  push(val) {
    super.push(val);
    if (this._min === null || val <= this._min) {
      this._minStack.push(val);
      this._min = val;
    }
  }

  pop() {
    let val = super.pop();
    if (val === this._minStack.peek()) {
      this._minStack.pop();
      this._min = this._minStack.peek();
    }
    return val;
  }

  min() {
    return this._min;
  }
}

/* TEST */

var s = new MinStack();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);

console.log(s.min(), null);
