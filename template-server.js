const express = require('express');

const app = express();

const noop = () => {};

const User = {
  findById: (userId, callback) => {
    callback(null, { name: 'alex', age: 25, image: { path: null } });
  },
};
const upload = {
  // when you call single() we return a function that does nothing
  single: () => noop,
};

app.post('/test', upload.single('file'), (req, res, next) => {
  User.findById(req.user.id, (err, user) => {
    if (err) {
      next(err);
      return;
    }

    user.image.path = req.file.key || '';
    user.save((err) => {
      if (err) {
        next(err);
        return;
      }

      res.redirect('/test-details');
    });
  });
});

app.listen(8080);
