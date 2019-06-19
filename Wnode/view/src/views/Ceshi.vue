<template>
  <div>
    <div ref="name">1</div>
    <div ref="name">2</div>
    <div ref="name">3</div>
    <div ref="name">4</div>
    <temp1></temp1>
    <temp2></temp2>
  </div>
</template>
<script lang="ts">
import temp1 from "./temp/temp1.vue";
import temp2 from "./temp/temp2.vue";
import { Component, Vue } from "vue-property-decorator";
// console.log('vuex',a)

// function add(){
//     // 第一次执行时，定义一个数组专门用来储存所有的参数
//     var args = [].slice.call(arguments);
//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var fn = function(){
//         var fn_args = [].slice.call(arguments);

//         return add.apply(null, args.concat(fn_args));
//     }
//     // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     fn.toString = function(){
//         return args.reduce(function(acc, prev){
//             return acc + prev;
//         })
//     }

//     return fn;
// }
@Component({
  components: {
    temp1,
    temp2
  }
})
export default class Ceshi extends Vue {
  beforeCreate() {
    console.log("Ceshi beforeCreate");
  }
  created() {
    console.log("Ceshi created");
  }
  beforeMount() {
    console.log("Ceshi beforeMount");
  }
  mounted() {
    console.log("Ceshi mounted");
  }
  beforeUpdate() {
    console.log("Ceshi beforeUpdate");
  }
  updated() {
    console.log("Ceshi updated");
  }
  destroyed() {
    console.log("Ceshi destory");
  }
}
</script>

