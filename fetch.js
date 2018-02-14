const pThrottle = require('p-throttle');
const pTimeout = require('p-timeout');
const fetch = require('node-fetch');

const now = Date.now();
const getSecDiff = () => ((Date.now() - now) / 1000).toFixed();

const pullNum = () =>
  fetch('http://localhost:8080/')
    .then(res => res.json())
    .then(({ value }) => value);

const pullNumWithin = timeout =>
  pTimeout(pullNum(), timeout)
    .then((value) => {
      console.log(`${getSecDiff()}s - New value: ${value}.`);
    })
    .catch(() => {
      console.log(`${getSecDiff()}s - Failed to get a num in time.`);
    });

const throttledPullNum = pThrottle(() => pullNumWithin(1200).then(throttledPullNum), 1, 2000);

// Decide when it's enough
setTimeout(() => {
  console.log('Stopping.');
  throttledPullNum.abort();
}, 16000);

// Start
throttledPullNum().catch(() => {
  console.log('Stopped.');
});
