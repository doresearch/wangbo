<template>
  <div>
    <div>temp1</div>
    <!-- <temp3></temp3> -->
  </div>
</template>
<script lang="ts">
import temp3 from "./temp3.vue";
import { Component, Vue } from "vue-property-decorator";

// 创建一个类型为T的class，这个class继承了传入的T类型，并且创建过程中传入一个参数数组
function life<T extends { new (...args: any[]): {} }>(constructor: T): T {
  let name = constructor.name;
  return class extends constructor {
    beforeCreate() {
      console.log(name, "beforeCreate");
    }
    created() {
      console.log(name, "created");
    }
    beforeMount() {
      console.log(name, "beforeMount");
    }
    mounted() {
      console.log(name, "mounted");
    }
    beforeUpdate() {
      console.log(name, "beforeUpdate");
    }
    updated() {
      console.log(name, "updated");
    }
    destroyed() {
      console.log(name, "destory");
    }
  };
}
@life
export default class temp1 extends Vue {}
</script>

