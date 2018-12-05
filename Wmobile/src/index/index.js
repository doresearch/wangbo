import '../../lib/css/normalize.css'
import '../../lib/css/w.css'

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

let fingePos = getPos()

// let address = document.getElementsByTagName('address')[0]

document.addEventListener('touchstart', ev => {
  ev.preventDefault()
})
