<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  },
  beforeRouteEnter(to, from, next) {
    console.log("routerenter");
    next((vm) => {
    });
  },
  
  data() {
    return {
      name: 123
    };
  }
})
export default class Home extends Vue {
  created(){
    console.log('Home created')
  }
  destroyed(){
    console.log('Home destory')
  }
}
</script>
