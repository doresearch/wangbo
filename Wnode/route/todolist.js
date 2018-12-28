const koaRouter = require('koa-router')
const amysql = require('mysql2/promise')
const nodeMysql = require('node-mysql-promise')
const todoList = new koaRouter()

// ***************** user *******************
const linkmysql = async function() {
  const connection = await amysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'ceshi'
  })

  const mysql = nodeMysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'ceshi'
  })

  todoList.get('/user/list', async ctx => {
    try {
      let users = await mysql.table('users').field('uuid,username,age,gender').select()
      let statusCode = 200
      ctx.body = { data: users, statusCode }
    } catch (e) {
      ctx.body = e
    }
  })

  todoList.get('/user/add', async ctx => {
    try {
      let { username, age, gender = '男', account, password } = ctx.query
      let uuid = Date.now().toString()

      mysql.table('table').add(data).then(function (insertId) {
        //如果插入成功，返回插入的id
      }).catch(function (err) {
            //插入失败，err为具体的错误信息
        })
      let sql = await connection.query(`Insert INTO users(uuid,username,age,gender,account,password) 
      VALUES( '${uuid}', '${username}', ${age}, '${gender}', '${account}', '${password}')`)
      let status = 200
      ctx.body = { status }
    } catch (e) {
      ctx.body = { e }
    }
  })

  todoList.get('/user/detail', async ctx => {
    try {
      let { uuid } = ctx.query
      let [data] = await connection.query(
        `SELECT uuid,username,age,gender,account,password FROM users where uuid='${uuid}'`
      )
      let status = 200
      ctx.body = { data, status }
    } catch (e) {
      ctx.body = e
    }
  })
  /**
   * @param {number} type 类型
   */
  todoList.get('/todolist/list', async ctx => {
    try {
      let { type } = ctx.query
      console.log(
        'SELECT `uuid`, `content`,`status`,`create_time`,`end_time` FROM task where `status`=' +
          type
      )
      let [data] = await connection.query(
        'SELECT `uuid`, `content`,`status`,`create_time`,`end_time` FROM task where `status`=' +
          type
      )
      let status = 200
      ctx.body = { data, status }
    } catch (e) {
      ctx.body = e
    }
  })
  /**
   * 用来改变状态，比如从 计划任务修改为执行中 状态
   * @param {string} uuid 获取id
   * @param {number} type 修改后的状态
   */
  todoList.get('/todolist/addorupdate', async ctx => {
    // ctx.body = '/todolist/addorupdate'
    console.log('Update task SET `status`' + type + ' where uuid=' + uuid)
  })
  // delete
  todoList.get('/todolist/delete', async ctx => {
    ctx.body = '/todolist/delete'
  })
}

linkmysql()

module.exports = todoList.routes()
