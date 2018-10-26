const { promisify } = require('util');
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

const listen = promisify(app.callback);
listen(3000).then(() => {
  console.log('started listening');
});
