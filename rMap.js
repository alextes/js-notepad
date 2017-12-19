const Benchmark = require('benchmark');

let count = 0;
function getProp() {
  count += 1;
  return ['name', 'age', 'place'][count];
}

const map = {
  name: 'alex',
  age: 24,
  place: 'AMS',
};

var suite = new Benchmark.Suite();

// add tests
suite
  .add('inFn', function() {
    return {
      name: 'alex',
      age: 24,
      place: 'AMS',
    }[getProp()];
  })
  .add('outFn', function() {
    return map[getProp()];
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({async: true});
