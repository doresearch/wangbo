import './index.less'
// 声明所有的图片
// 设定初试加载
!(function() {
  // function M(func){
  //   return func
  // }
  // var o1 = {name:'p'}
  // var o2 = new Object({name:'p'})
  // // var o3 = new M('o3')
  // var o4 = Object.create({name:'p'})
  // var o5 = new M(function(){
  //   console.log(123)
  // })
  function Parent1(){
    this.name = 'parent1'
  }

  function Child(){
    Parent1.call(this)
    this.type = 'child'
  }

  let c = new Child
  console.log(c)

  function Parent2(){
    this.name = 'parent2'
  }

  function Child2(){
    this.type = 'child2'
  }
  Parent2.prototype.say = function(){}
  Parent1.prototype.say = function(){}

  Child2.prototype = new Parent2()
  let d = new Child2
  console.log(d)

  function Parent4(){
    this.name = 'parent4'
    this.play = [1,2,3]
  }

  function Child4(){
    this.type = 'child4'
  }
  Parent4.prototype.say = function(){}
  Child4.prototype = Parent4.prototype
  let e = new Child4
  console.log(e)
  return


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
  // 构造函数
  !(function() {
    function Foo() {
      this.ceshi = 321
      return this
    }
    Foo.prototype.ceshi = 123
    let foo = new Foo()

    Foo instanceof Function // true
    foo instanceof Function // false
    Foo instanceof Object // true
    foo instanceof Object // true
    Function instanceof Object // true
    Function.__proto__ === Object.__proto__ // true
    // Object.prototype.__proto__ = null
    // Object.__proto__ == function(){//* native code */}

    // 1.为什么要用new？
    // 首先看new做了什么
    //  1.new创建了一个对象
    //  2.在普通函数里面的this是window对象,所以得改变this指向来给obj添加属性和方法  test.call(obj); 吧test函数里面的this改变成obj
    //  3.把obj的地址赋值给等式左边的变量
    //  4.将隐式类型的地址指向到构造函数的显示类型上
    // 2.用new之后发生了什么
    // 使用new之后this就会变成空白对象
    // 所有的引用类型（数组、对象、函数），都具有对象特征，即可以扩展属性（除了null属性）
    // 3.所有的引用类型都有一个__proto__属性（隐式类型），属性值是一个普通的对象
    // 所有的函数类型都有一个prototype属性（隐式类型），属性值是一个普通的对象
    // 所有引用类型的__proto__都指向构造函数的prototype
    // 当一个属性访问不到的时候会自动去找他的__proto__
    // __proto__和prototype的区别
    // 循环函数的属性for(var i in obj) 会访问到原型上的属性，得用 obj.hasownProperty来确定在不在当前对象上

    function trim(str) {
      return str.replace(/\n/, '')
    }

    function Elem(key) {
      key = trim(key)
      let _reg_id = /^\#\w+/
      let _reg_class
      let stage = {
        class: function() {}
      }

      if (_reg_id.test(key)) {
        return document.getElementById(key)
      } else if (_reg_class.test(key)) {
        return document.getElementsByClassName(key)
      }
    }
    // 作用域
    console.log('作用域-------------')

    console.log(a_3())
    function a_3(){
      console.log(this)
    }
    var ceshi = function (){
        console.log(this.name)
    }.bind({name:123})
    ceshi()
    ceshi.call({name:234})
  })()
})()
