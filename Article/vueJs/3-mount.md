### mount
hydrating -> 服务器渲染相关，web认为false


entry-runtime-with-compiler.js

在这个入口文件下

const mount = Vue.prototype.$mount 方法 

第一次是用来存储方法，这个时候用的$mount是来自于./runtime/index中 Vue.prototype 的方法，

```
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
```

重写的原因是因为runtime版本没有这部分逻辑

多余部分逻辑： 1. 挂载位置body，html判断；2.如果写了render函数就直接使用否则就启用编译。

vue最终只认识render函数做渲染

mountComponent 方法来自 core中的定义基本框架如下

```
mountComponent = function(vm, el, hydrating = false){
  if(!vm.$options.render){
    <!-- 首先判断有没有render，没有就抛出错误 -->
  }

  <!-- 生命周期 -->
  callHook(vm, 'beforeMount')

  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    <!-- 性能代码，需要打开production去看 -->
  }else{
    <!-- 更新DOM -->
  }
  <!-- 设定一个监听来更新页面，底下第true就是设定是renderWatcher -->
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
````

然后入口文件下对 $mount 进行了重写

```
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  <!-- 禁止mount挂载在body上: 原因是因为会添加新节点、删除旧节点 -->
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options
  // resolve template/el and convert to render function
  <!-- 这一段就是实现runtime没有的编译功能，把template转成render，有template就转换，没有就抛出 -->
  <!-- 赋值template -->
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    <!-- 有template数值的赋值内容存在，就编译成render，作为vue识别的内容 -->
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }

      const { render, staticRenderFns } = compileToFunctions(template, {
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
  return mount.call(this, el, hydrating)
}
```


真正起作用的代码
```
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    <!-- 如果没有render就新建一个空节点抛错 -->
  }
  callHook(vm, 'beforeMount')

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    <!-- 渲染优化 -->
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */)
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```
new Watcher的逻辑