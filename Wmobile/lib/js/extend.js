export const randomColor = function() {
  let color = '#' + (~~(Math.random() * (1 << 24))).toString(16)
  console.log('random Color:', color)
  return color
}
/**
 * 显示提示
 * @param {*} txt 文字
 * @param {*} duration 持续时间，默认2000ms
 * @param {*} z 强制提升层级
 */
export const tipShow = function(txt, duration = 2000, z) {
  // alert(txt)
  var bodyTip = document.getElementById('tip')
  var tip = document.createElement('div')
  tip.classList.add('fs-tip-box')
  if (z) tip.style.zIndex = z
  tip.innerHTML = '<div class="fs-tip">' + txt + '</div>'
  bodyTip.append(tip)
  setTimeout(function() {
    tip.classList.add('opacity-hide')
    setTimeout(() => {
      bodyTip.removeChild(tip)
    }, 500)
  }, duration)
}
/**
 * 在element中执行倒计时
 * @param {HTMLElement} ele 倒计时的位置
 * @param {Number} range 倒计时时间，默认30s
 * @param {String} formate 格式，可选
 */
export function timeRunInDom(ele, range, formate, cb) {
  'use strict'
  let EndTime = Date.now() + range * 1000
  range = range || 30
  formate = formate || 'hh:mm:ss:ms'
  timerun()
  function timerun() {
    if (Date.now() <= EndTime) {
      ele.innerText = timeminus(EndTime, Date.now())
      requestAnimationFrame(timerun)
    } else {
      cb && cb()
    }
  }

  /**
   * 时间减法
   * @param {Number} a
   * @param {Number} b
   */
  function timeminus(a, b) {
    let _timestamp = a - b
    let _ss = _timestamp % 1000
    let _s = _addZero(~~(_timestamp / 1000) % 60) // 秒钟数字
    let _m = _addZero(~~(((_timestamp / 1000) % 3600) / 60)) // 分钟数字
    let _h = _addZero(~~(((_timestamp / 1000) % 86400) / 3600)) // 小时数字

    return formate
      .replace('hh', _h)
      .replace('mm', _m)
      .replace('ss', _s)
      .replace('ms', _ss)

    function _addZero(num) {
      if (num < 10) return '0' + num
      return num
    }
  }
}

/**
 * 获取 微信用户登录的 lid
 */
export const WXuserLid = new FixedStorage('WXuserLid')

/**
 * 获取 微信用户登录的 lid
 */
export const WXuserToken = new FixedStorage('WXuserToken')
/**
 * 设定一个key值
 * @param {*} key
 */
function FixedStorage(key) {
  this.key = key
}

FixedStorage.prototype.set = function(value) {
  localStorage.setItem(this.key, value)
}
FixedStorage.prototype.get = function() {
  let str = localStorage.getItem(this.key)
  if (str === null) str = ''
  if (str === 'undefined') str = ''
  return str
}
/**
 * 判断是不是iphoneX
 */
export const isIphoneX = () =>
  /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)

/**
 * 修改样式
 * @param {*} ele 元素，可以是ELement也可以是数组
 * @param {*} method 默认为add，可以变为remove
 * @param {*} _class 默认为hide，可以变任意
 */
export function changeClass(ele, method = 'add', _class = 'hide') {
  if (type(ele) === 'htmldivelement') ele.classList[method](_class)
  if (type(ele) === 'array')
    ele.map(item => {
      if (item) item.classList[method](_class)
    })
}

export function type(value) {
  var type = Object.prototype.toString.call(value).toLocaleLowerCase()
  return type.substr(8, type.length - 9)
}
/**
 * 查看地址栏中是否有sponsor发起者id如果没人发起就进入发起页
 */
export function searchObj() {
  var arr = window.location.search ? window.location.search.split('?')[1].split('&') : []
  var obj = {}

  arr.map(function(n, i) {
    obj[n.split('=')[0]] = n.split('=')[1]
  })
  return obj
}
/**
 * 通过key值来获取用户的cookie，这里不涉及域名和事件操作
 * @param {*} name
 */
export function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return unescape(arr[2])
  else return null
}
