const express = require('express');

const app = express();

app.get('/user', (req, res, next) => {
  console.log('user request');
  res.send('User');
  next();
});

app.get('/:path', (req, res) => {
  console.log('replying from /:path');
  res.send('Path');
});

app.listen(8080);
