const serve = require('koa-static')
const path = require('path')
console.log(path.resolve(__dirname, '../home/'))
module.exports = serve(path.resolve(__dirname,'../home/'))
