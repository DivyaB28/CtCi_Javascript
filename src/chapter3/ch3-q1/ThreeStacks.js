/**
 * TripleStack class holds 3 stacks in one array. This is done by interleaving
 * the values from the 3 indexes, so the first items are at 0, 1 and 2 and
 * subsequent items are every 3 places from those. This class takes advantage
 * of the fact that JavaScript arrays are dynamic and doesn't hold the stacks
 * to any size. It doesn't reduce the size of the underlying array when items
 * are popped but that could easily be added.
 *
 * Time: push O(1), pop O(1), peek O(1)
 * Additional space: push O(1), pop O(1), peek O(1)
 */
class ThreeStacks {
  constructor() {
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  _getLength(stack) {
    return this._lengths[stack - 1];
  }

  push(stack, val) {
    let index = this._getLength(stack) * 3 + stack - 1;
    this._array[index] = val;
    this._lengths[stack - 1]++;
  }

  pop(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let index = length * 3 + stack - 1;
      value = this._array[index];
      this._array[index] = undefined;
      --this._lengths[stack - 1];
    }
    return value;
  }
  peek(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let index = length * 3 + stack - 1;
      value = this._array[index];
    }
    return value;
  }
  isEmpty(stack) {
    return this._getLength(stack) === 0;
  }
}

let stack = new TripleStack();
stack.push(1, "1a");
stack.push(1, "1b");
stack.push(1, "1c");
stack.push(2, "2a");
stack.push(2, "2b");
stack.push(2, "2c");
stack.push(3, "3a");
stack.push(3, "3b");
stack.push(3, "3c");

stack.peek(1);
console.log(stack.pop(1));
console.log(stack.pop(1));
console.log(stack.pop(1));

console.log(stack);
