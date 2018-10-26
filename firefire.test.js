import test from 'ava';
import pLimit from 'p-limit';
import http from 'http';

const request = (url, params, postData) => new Promise((resolve, reject) => {
  const req = http.request(url, params, (res) => {
    if (res.statusCode !== 200) {
      reject(new Error('status not 200'));
    }
    // data event has to be consumed to end response
    res.on('data', () => {});

    res.on('end', () => {
      resolve(res.statusCode);
    });
  });
  req.on('error', (e) => {
    reject(e);
  });
  if (postData) {
    req.write(postData);
  }
  req.end();
});
const fireSingle = () => request('http://localhost:8080/');
const fireBatch = (t, numberOfRequests, limit) => Promise.all(
  [...Array(numberOfRequests).keys()].map(() => limit(fireSingle).then((statusCode) => {
    t.is(statusCode, 200);
  })),
);

test.serial('benchmark 10k at 50 concurrent', t => fireBatch(t, 10 * 1000, pLimit(50)));

test.serial('benchmark 20k at 50 concurrent', t => fireBatch(t, 20 * 1000, pLimit(50)));

test.serial('benchmark 30k at 20 concurrent', t => fireBatch(t, 30 * 1000, pLimit(20)));

test.serial('benchmark 40k at 20 concurrent', t => fireBatch(t, 40 * 1000, pLimit(20)));
