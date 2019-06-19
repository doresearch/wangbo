<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div @click="next">next</div>
    <div @click="back">back</div>
    <div ref="name">01</div>
    <div ref="name">02</div>
    <div ref="name">03</div>
    <div ref="name">04</div>
    <div v-for="(item,index,ceshi) in arr" :key="index" ref="arr" :style="{
      background:randomColor()
    }">
      item {{item}} {{index}} {{ceshi}}
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created(){
    console.log('About created')
  },
  destroyed(){
    console.log('About destory')
  },
  mounted() {
    // console.log("refs", this.$refs);
    setTimeout(()=>{
      this.arr.splice(2,1)
    },1000)
  },
  data() {
    return {
      arr: [1, 2, 3]
    };
  },
  methods: {
    randomColor(){
      let color = '#' + (~~(Math.random() * (1 << 24))).toString(16)
      return color
    },
    back() {
      this.$router.back();
    },
    next() {
      this.$router.forward();
    }
  }
});
</script>
