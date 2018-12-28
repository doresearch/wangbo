const serve = require('koa-static')
const path = require('path')
module.exports = serve(path.resolve(__dirname,'../home/'))
