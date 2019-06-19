<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/ceshi">Ceshi</router-link>
    </div>
    <transition mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script lang="ts">
import Vue,{ Component} from "vue"; 
export default Vue.extend({
  // beforeCreate() {
  //   console.log("App beforeCreate");
  // },
  // created() {
  //   console.log("App created");
  // },
  // beforeMount() {
  //   console.log("App beforeMount");
  // },
  // mounted() {
  //   console.log("App mounted");
  // },
  // beforeUpdate() {
  //   console.log("App beforeUpdate");
  // },
  // updated() {
  //   console.log("App updated");
  // },
  // destroyed() {
  //   console.log("App destory");
  // }
});
</script>


<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.v-enter,
.v-leave-to {
  background: blue;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  background: #fff;
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: 1s;
}
</style>
