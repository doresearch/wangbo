import './index.less'
// 声明所有的图片
// 设定初试加载
!(function() {
  var t = document.createElement('script')
  if (!('noModule' in t) && 'onbeforeload' in t) {
    var n = !1
    document.addEventListener(
      'beforeload',
      function(e) {
        if (e.target === t) n = !0
        else if (!e.target.hasAttribute('nomodule') || !n) return
        e.preventDefault()
      },
      !0
    ),
      (t.type = 'module'),
      (t.src = '.'),
      document.head.appendChild(t),
      t.remove()
  }
})()
