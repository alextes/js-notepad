const crypto = require('crypto');
const express = require('express');
const { Readable } = require('stream');

const app = express();

let count = 0;
const endlessStream = new Readable({
  read() {
    count++;
    if (count === 10000) {
      console.log('mem MB', process.memoryUsage().heapTotal / 1000000);
      count = 0;
    }
    this.push(crypto.randomBytes(10240).toString('hex')); // 20KiB
  },
});

app.get('/', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/force-download',
    'Content-disposition': 'attachment; filename=file.txt',
  });
  endlessStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
