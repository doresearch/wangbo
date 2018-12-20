// Swiper + tweenMax
import './tweenMax'
import './index.less'

// bind
let ceshi = function(...arg) {
  console.log(this)
  console.log(arg)
}

let funca = ceshi.bind({ a: 1 }, 1, 2, 3)
let funcc = new funca()
console.log(funca, funca(4), funcc)

Function.prototype._bind = function(func, ...arg) {
  let self = this

  // self.prototype = Object.create(func.prototype)
  let Bound = function(...list) {
    self.apply(func, [...arg, ...list])
  }

  return Bound
}

let funcb = ceshi._bind({ a: 1 }, 1, 2, 3)
let funcd = new funcb()
console.log(funcb, funcb(4), funcd)

$(document)
  .ajaxStart(onStart)
  .ajaxSuccess(onSuccess)
  .ajaxComplete(onComplete)
function onSuccess() {
  console.log('global>>>>>>>>>>>>onSuccess')
}
function onComplete() {
  console.log('global>>>>>>>>>>>>onComplete')
}
function onStart() {
  console.log('global>>>>>>>>>>>>start')
}

$.ajax({
  // global: false,
  url: 'http://127.0.0.1:9200/specialscroll.html',
  success(res) {
    console.log('--->su')
  }
})
