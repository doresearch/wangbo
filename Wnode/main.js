// const Koa = require('koa')
// const app = new Koa()
// const route = require('koa-route')
// const view = require('./static/view')
// const home = require('./static/home')

// app.use(home)
// app.use(view)
// app.listen(7000)
const Koa = require('koa')
const app = new Koa()
const path = require('path')
const koaStaticCache = require('koa-static-cache')
const koaSwig = require('koa-swig')
// const co = require('co')
// const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')
const TodoList = require('./route/todolist')

app.use(
  koaStaticCache(path.resolve(__dirname, './views/dist'), {
    prefix: '/',
    gzip: true
  })
)

// app.use(cors())
app.use(bodyParser({}))
app.use(TodoList)

app.on('error', err => {
  console.log('错了', err)
})

app.listen(7000,()=>{
  console.log('app listen on localhost:7000')
})
