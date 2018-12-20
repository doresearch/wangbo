### vue 创建渲染方法\_update 的逻辑

lifecycleMixin 方法

检测的时候先判断是不是 \_isMounted , 如果已经挂载过就调用钩子 beforeUpdate

获取

```
prevEl = vm.$el // div#app
preVnode = vm._vnode // null
preActiveInstance = activeInstance // null
activeInstance = vm
vm._vnode = vnode
```

如果不存在 preVnode

patch 方法：

```
patch(oldVnode, vnode, hydratingm, removeOnly, parentEle, refEle){
  <!-- 
    如果是真实节点的时候
    如果节点的nodeType是1并且判断是不是服务器渲染-->不关心
    oldVnode = emptyNodeAt(oldVnode) 创建一个节点并且替换它
    
    nodeOps.parentNode(oldEle-> oldVnode.ele)

    createElm(
      vnode,
      insertedVnodeQueue,
      // extremely rare edge case: do not insert if old element is in a
      // leaving transition. Only happens when combining transition +
      // keep-alive + HOCs. (#4590)
      oldElm._leaveCb ? null : parentElm$1,
      nodeOps.nextSibling(oldElm)
    );
  -->
}
```

nodeOps 方法：

```
isUndef (v) => return v === undefined || v === null

isTrue (v) => return v !== undefined && v !== null

isTrue (v) => return v === true

isFalse (v) => return v === false

function emptyNodeAt (elm) {
  return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
}
```
