const serve = require('koa-static')
const path = require('path')
module.exports =  koaStaticCache(path.resolve(__dirname, './views'), {
  prefix: '/',
  gzip: true
})
