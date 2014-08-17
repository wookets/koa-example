
var koa = require('koa');
var app = koa();


// x-response-time

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});


// logger

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms + 'ms');
});


// response

app.use(function *() {
  this.body = 'Hello World';
});


// error

app.on('error', function(err) {
  log.error('server error', err);
});


app.listen(3000);

