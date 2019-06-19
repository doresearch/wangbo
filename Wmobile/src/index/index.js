import '../../lib/css/normalize.css'
import '../../lib/css/w.css'
import { changeClass } from '../../lib/js/extend'
let div = document.querySelector('#app div')
// let fingePos = getPos()
let input = document.querySelector('input')
!(function() {
  // div.addEventListener('touchstart', ev => {
  //   changeClass(div, 'add')
  //   ev.preventDefault()
  // })
  // document.addEventListener(
  //   'touchstart',
  //   ev => {
  //     ev.preventDefault()
  //   },
  //   { passive: false }
  // )

  input.addEventListener('touchstart', ev => {
    ev.stopPropagation()
  })

  input.addEventListener('drop', function(event) {
    // 获取拖拽文本内容
    var text = event.dataTransfer.getData('text')
    if (this.value == '' && text.match(/\d/g) && text.match(/\d/g).length == 11) {
      event.preventDefault()
      input.value = text.replace(/\D/g, '')
      input.select()
    }
  })
  let inputs = [...document.querySelectorAll('input, textarea')]
  inputs.forEach(function(ele) {
    ele.addEventListener('paste', function(event) {
      var clipboardData = event.clipboardData || window.clipboardData
      if (!clipboardData) return
    })
  })
})()

function getPos() {
  let fingePos = {
    x: 0,
    y: 0
  }

  document.documentElement.addEventListener('mousemove', res => {
    fingePos.x = res.x
    fingePos.y = res.y
  })

  return fingePos
}

// let address = document.getElementsByTagName('address')[0]
