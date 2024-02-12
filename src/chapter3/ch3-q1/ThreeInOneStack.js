/**
 * Three in one stack: Describe how youcould use a single array to implement 3 stacks
 */

class ThreeInOne {
  constructor() {
    this.container = [];
    this.middleTop = 0;
    this.middleBottom = 0;
  }

  push1(val) {
    this.container.unshift(val);
    this.middleBottom++;
    this.middleTop++;
  }
  push2(val) {
    this.container.splice(this.middleTop, 0, val);
    this.middleTop++;
  }
  push3(val) {
    this.container.push(val);
  }

  isEmpty1() {
    return this.middleBottom === 0;
  }
  isEmpty2() {
    return this.middleTop === this.middleBottom;
  }
  isEmpty3() {
    return this.middleTop === this.container.length;
  }

  pop1() {
    if (this.isEmpty1()) {
      return undefined;
    }
    let item = this.container.shift();
    this.middleBottom--;
    this.middleTop--;
    return item;
  }

  pop2() {
    if (this.isEmpty2()) {
      return undefined;
    }
    let item = this.container[this.middleTop - 1];
    this.container.splice(this.middleTop - 1, 1);
    if (this.middleBottom < this.middleTop) {
      this.middleTop--;
    }

    return item;
  }

  pop3() {
    if (this.isEmpty3()) {
      return undefined;
    }
    return this.container.pop();
  }
  peek1() {
    return this.isEmpty1() ? undefined : this.container[0];
  }
  peek2() {
    return this.isEmpty2() ? undefined : this.container[this.middleTop - 1];
  }
  peek3() {
    return this.isEmpty3()
      ? undefined
      : this.container[this.container.length - 1];
  }
  print() {
    console.log(this.container);
  }
}

let t = new ThreeInOne();
t.push1("1a");
t.push1("1b");
t.push1("1c");
t.push2("2a");
t.push2("2b");
t.push2("2c");
t.push3("3a");
t.push3("3b");
t.push3("3c");

t.print();
//[
//     '1c', '1b', '1a',
//     '2a', '2b', '2c',
//     '3a', '3b', '3c'
//   ]
var a1 = t.pop1();
var a2 = t.pop2();
var a3 = t.pop3();

var peek1 = t.peek1();
var peek2 = t.peek2();
var peek3 = t.peek3();

var b1 = t.pop1();
var b2 = t.pop2();
var b3 = t.pop3();

var isEmptya1 = t.isEmpty1();
var isEmptya2 = t.isEmpty2();
var isEmptya3 = t.isEmpty3();

var c1 = t.pop1();
var c2 = t.pop2();
var c3 = t.pop3();

var d1 = t.pop1();
var d2 = t.pop2();
var d3 = t.pop3();

var isEmptyb1 = t.isEmpty1();
var isEmptyb2 = t.isEmpty2();
var isEmptyb3 = t.isEmpty3();

console.log(t.container, t.middleBottom, t.middleTop); // [] 0 0
console.log(a1, a2, a3); // 1c 2c 3c
console.log(peek1, peek2, peek3); // 1b 2b 3b
console.log(b1, b2, b3); // 1b 2b 3b
console.log(isEmptya1, isEmptya2, isEmptya3); // false false false
console.log(c1, c2, c3); // 1a 2a 3a
console.log(d1, d2, d3); // undefinded undefinded undefinded
console.log(isEmptyb1, isEmptyb2, isEmptyb3); // true true true
