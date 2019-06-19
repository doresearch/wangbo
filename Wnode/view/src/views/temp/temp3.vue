<template>
  <div>temp3</div>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

export default Vue.extend({
  beforeCreate() {
    console.log("temp3 beforeCreate");
  },
  created() {
    console.log("temp3 created");
  },
  beforeMount() {
    console.log("temp3 beforeMount");
  },
  mounted() {
    console.log("temp3 mounted");
  },
  beforeUpdate() {
    console.log("temp3 beforeUpdate");
  },
  updated() {
    console.log("temp3 updated");
  },
  destroyed() {
    console.log("temp3 destory");
  }
});
</script>

