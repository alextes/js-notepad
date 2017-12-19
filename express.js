const express = require('express');
const axios = require('axios');

const app = express();

function getProps() {
  axios
    .get('https://api.coinhive.com/user/top?secret=')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
}

app.get('/', (req, res) => {
  const props = getProps();
  res.render('index.pug', { props });
});

app.listen(8080);
