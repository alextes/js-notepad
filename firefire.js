const pLimit = require('p-limit');
const http = require('http');

const CONCURRENCY = 100;
const NUMBER_OF_REQUESTS = 20000;
const limit = pLimit(CONCURRENCY);

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
const fire = () => request('http://localhost:8080/');

(async () => {
  await Promise.all(
    [...Array(NUMBER_OF_REQUESTS).keys()].map(() => limit(() => fire()).then((statusCode) => {
      console.log('p resolved', statusCode);
    })),
  );
})();
