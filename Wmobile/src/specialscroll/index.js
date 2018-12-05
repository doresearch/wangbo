import '../../lib/css/normalize.css'
import '../../lib/css/w.css'
import './index.less'

!(function() {
  let box = document.getElementsByClassName('box')
  let div
  var now = 0
  var off = true

  initStyle()
  initBindEvent()
  function initStyle() {
    div = [...box[0].getElementsByTagName('div')]
    div.map((item, index) => {
      // item.style.zIndex = div.length + 10 - index
      item.style.transition = '0.5s'
      item.style.transform = `rotate(-${index * 10}deg) translateZ(-${60 * index}px)`
    })
  }

  function initBindEvent() {
    box[0].addEventListener('touchmove', () => {
      if (!off) {
        return
      }
      off = false
      div[now].style.transition = '.5s'
      div[now].style.transform = 'translateX(-500px) rotateY(-20deg)'
      setTimeout(function() {
        box[0].removeChild(div[now])
        initStyle()
        off = true
      }, 500)
    })
  }
})()
