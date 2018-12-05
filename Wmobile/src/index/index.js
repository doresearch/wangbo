import '../../lib/css/normalize.css'
import '../../lib/css/w.css'
import { changeClass } from '../../lib/js/extend'
let div = document.querySelector('#app div')
// let fingePos = getPos()
let input = document.querySelector('input')
!(function() {
  div.addEventListener('touchstart', ev => {
    changeClass(div, 'add')
    ev.preventDefault()
  })
  document.addEventListener(
    'touchstart',
    ev => {
      ev.preventDefault()
    },
    { passive: false }
  )

  input.addEventListener('touchstart',ev=>{
    ev.stopPropagation()
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
