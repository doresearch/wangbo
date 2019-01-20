首先对于 http 来说的话，它全称是超文本传输协议

### 特点

http 协议具有无状态、无连接的特点，并且简单快速、灵活

### 报文组成

http 协议中不可忽视的部分是：

请求和响应

请求分为 请求行，请求头，空行，请求体

响应分为 状态行，响应头，空行，响应体

在 http 1.1 的标准中具有 keep-alive 的规则，又称连接的持久化

### http 方法

其方法包含常用的 GET、POST 以及 PUT、DELETE、HEAD、OPTION 等

### POST 和 GET 的区别

1.GET 的大小是收到限制的，按道理说 url 的长度是不受限制的，但是实际使用的时候浏览器会对 url 的长度进行限制一般认为是 2KB，而 POST 是不受限制的，但是服务器后台是默认限制了 80KB
2.GET 请求会被浏览器主动缓存，而 POST 不会
3.GET 产生的 URL 地址可以被收藏，而 POST 不会
4.GET 在浏览器回退时是无害的，而 POST 会再次提交
5.GET 请求只能进行 url 编码，而 POST 支持多种编码方式
6.GET 请求只接受 ASCII 字符，而 POST 没有限制
7.GET 参数通过 URL 传递，POST 放在 Request body 中

### HTTP 状态码

1xx 标识请求已接受，继续处理
2xx 成功，标识请求已经被成功接受
3xx 重定向-要完成请求必须进行更进一步的操作
4xx 客户端错误
5xx 服务器错误

### 什么是持久连接

http 协议采用‘请求-应答’模式，当使用普通模式，即非 keep-alive 模式时候，每个请求、应答客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP 协议为无连接的协议）

当使用 keep-alive 模式时候，keep-alive 功能使客户端到服务器端的连接持续有效，当出现对无武器的后续请求时，keep-alive 功能避免了建立或者重新建立连接

http1.1 之后支持
keep-alive

### 什么是管线化

1.管线化机制通过持久练级完成，仅 HTTP/1.1 支持此技术 2.只有 GET 和 HEAD 请求可以进行管线化，POST 有所限制 3.初次创建连接的时候不应启动管线机制，因为服务器不一定支持 HTTP/1.1 版本的协议

### 同源策略

同源策略限制从一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。

Cookie、LocalStorage 和 IndexDB 无法读取
DOM 无法获得
AJAX 请求不能发送

### 前后端如何通信

ajax
websocket
cors

### 如何创建 ajax

let xhr = XMLhttpRequest?new XMLhttpRequest():new window.ActiveXObject('Microsoft.XMLHTTP')
let dagta = opt.data
let type = opt.type.toUpperCase()
let dataArr = []

for(let k in data){
  dataArr.push(k+'='+data[k])
}

if(type === 'GET'){
  url = url + '?' + dataArr.join('&')
  xhr.open(type,url.replace(/\?\$/g,'',true))
  xhr.send()
}else if(type === 'POST'){
  xhr.open(type,url,true)
  xhr.setReqestHeader('Content-type','application/x-www-form-urlencoded')
  xhr.send(dataArr.join('&'))
}

xhr.onload = function(){
  if(xhr.status === 200 || xhr.status===304){
   }
}

### 跨域通讯的几种方式

jsonp、hash、postMessage、websocket、CORS

let ws = new WebSocket('wss://echo.websocket.org');

ws.open = function(evt){
  console.log('Connetion open')
  wx.send('Hello WebSockets')
}

wx.onmessage = function(evt){
  console.log('Received Message:' + evt.data);
  wx.close()
}

ws.onclose = function(ect){
  console.log('Connetion closed')
}
