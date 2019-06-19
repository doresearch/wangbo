<template>
  <div>temp2</div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  beforeCreate() {
    console.log("temp2 beforeCreate");
  },
  created() {
    console.log("temp2 created");
  },
  beforeMount() {
    console.log("temp2 beforeMount");
  },
  mounted() {
    console.log("temp2 mounted");
  },
  beforeUpdate() {
    console.log("temp2 beforeUpdate");
  },
  updated() {
    console.log("temp2 updated");
  },
  destroyed() {
    console.log("temp2 destory");
  }
});
</script>