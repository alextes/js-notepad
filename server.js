const http = require('http');

const randomNum = limit => Math.floor(Math.random() * limit);
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    setTimeout(() => {
      res.end(`{"value": "${randomNum(8)}"}`);
    }, randomNum(1600));
  })
  .listen(8080);
