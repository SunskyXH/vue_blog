const koa = require('koa')
const app = koa()
const serverPort = 8081

function logger(format) {
  format = format || ':method ":url"'

  return function *logger(next) {
    let str = format
      .replace(':method', this.method)
      .replace(':url', this.url)

      console.log(str)
      yield next
  }
}
function resTime() {
  return function *resTime(next) {
    let start = new Date
    yield next
    let ms = new Date - start
    this.set('X-Response-Time', ms + 'ms')
  }
}

app.use(logger())
app.use(resTime())
app.use(function *(){
  this.body = 'Hello world'
})
app.on('error', function (err, ctx) {
  log.error('[server error]', err, ctx)
})
app.listen(serverPort)


