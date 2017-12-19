const http = require('http');
http.createServer((req, res) => {
  res.statusCode = 304;
  res.setHeader('Content-Type', 'application/json');
  res.end('{"value": "bodybodybody"}');
}).listen(8080);
