const {
  pipe, chain, filter, partialRight,
} = require('ramda');

const two = 2;

const add2 = num => num + 2;
const mul2 = num => num * 2;
const addX = (num, x) => num + x;

pipe(chain(fn => fn(two)), filter(Boolean))([add2, mul2, partialRight(addX, 4)]);
