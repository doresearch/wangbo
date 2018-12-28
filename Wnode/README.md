### node命令行指令

.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file


### global

  console

  __dirname   // 文件所在绝对路径
  
  __filename
  
  process:
  
  Buffer:
  
  clearImmediate: [Function: clearImmediate],
  
  clearInterval: [Function: clearInterval],
  
  clearTimeout: [Function: clearTimeout],
  
  setImmediate: { [Function: setImmediate] [Symbol(util.promisify.custom)]: [Function] },
  
  setInterval: [Function: setInterval],
  
  setTimeout:  { [Function: setTimeout] [Symbol(util.promisify.custom)]: [Function] } }


### eventLoop
  事件是整个Nodejs的核心，Node.js中的大部分模块都使用或者继承了该模块

### module
  如果使用了module.exports放出文件的时候那么exports就不再有用，默认是module.exports和exports是一份引用

### Event
  emit 触发
  addEventListener 写入事件
  prependListener 把事件注册到最前面
  setMaxListeners 默认情况下，为特定事件添加了超过了10个监听器会打印一个警告

### progress
  argv 用来获取运行当前node进程的相关参数
### stream

### buffer

### fileSystem
