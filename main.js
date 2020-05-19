"use strict";

function makeAdder() {
  let count = 0;
  return (n = 0) => {
    count += n;
    return count;
  };
}

const adder = makeAdder();

console.log(adder());// 0
console.log(adder(2));// 2
console.log(adder(10)); // 12

function createCounter(n) {
  let initCounter = n;
  let counter = initCounter;
  return {
    getCurrent: () => counter,
    increment: () => ++counter,
    decrement: () => --counter,
    setValue: (x) => counter = x,
    reset: () => counter = initCounter,
  };
}

let counter = createCounter(10);
console.log(counter.getCurrent());// 10;
console.log(counter.increment()); // 11;
console.log(counter.getCurrent());// 11;
console.log(counter.decrement()); // 10;
console.log(counter.decrement()); // 9;
console.log(counter.getCurrent());// 9;
console.log(counter.setValue(90)); // 90
console.log(counter.getCurrent()); // 90;
console.log(counter.reset()); // 10; // reset to initial value that was passed to createCounter function
console.log(counter.getCurrent()); // 10;
