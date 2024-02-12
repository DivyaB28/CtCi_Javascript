class Stack {
  constructor() {
    this._data = [];
  }

  _size() {
    return this._data.length;
  }
  isEmpty() {
    return this._size() === 0;
  }

  push(val) {
    this._data.push(val);
  }
  pop() {
    return this._data.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._size() - 1];
  }
  _toArray() {
    return this._data;
  }
}

module.exports = Stack;
