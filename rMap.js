const Benchmark = require('benchmark');

const keys = ['name', 'age', 'place'];
let count = 0;
function getProp() {
  count += 1;
  return keys[count];
}

const map = {
  name: 'alex',
  age: 24,
  place: 'AMS',
};

const suite = new Benchmark.Suite();

// add tests
suite
  .add(
    'inFn',
    () =>
      ({
        name: 'alex',
        age: 24,
        place: 'AMS',
      }[getProp()]),
  )
  .add('outFn', () => map[getProp()])
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
