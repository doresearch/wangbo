import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// // test 装饰器

// function f(ctor) {
//   console.log('f() evaluated', ctor)
//   ctor.prototype.name = 123
//   // return function(target: any, pro: string, des: any) {
//   //   console.log('f() called', target)
//   //   return target
//   // }
// }
// // function g() {
// //   console.log('g() evaluated')
// //   // return function(target: any, pro: string, des: any) {
// //     // console.log('g() called')
// //   // }
// // }

// @f
// class C {
//   method() {
//     console.log('123')
//   }
// }
// // let r = new C()
// // console.log(r)


// var arr = [{a:1},{a:1},{a:2},{a:2},{a:3}]


