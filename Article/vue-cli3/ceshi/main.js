import Vue from 'vue';
import App from './App.vue';
let wb = {}
wb.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log('myGlobalMethod')
  }
  Vue.wbVersion = '1.0'
  // 3. 注入组件
  Vue.mixin({
    created(){
      console.log(this)
    }
    // 逻辑...
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
  Vue.prototype.wbVersion = '2.0'
}
Vue.use(wb)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
