<template>
  <div id="page">
    <h1>Hello!</h1>
    <div v-for="item in number" :key="item">{{~~number*Math.random()*1000}}</div>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.add();
  },
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.number = this.number + 1;
      if(this.number < 100){
        requestAnimationFrame(this.add);
      }
    }
  }
};
</script>
<style>
#page {
  position: fixed;
  bottom: 0;
}
</style>

