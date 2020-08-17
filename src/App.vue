<template>
  <div id="app">
    <span>test</span>
    <page></page>
  </div>
</template>

<script>
import Page1 from "./component/page1/page1.vue";
export default {
  name: "App",
  components: {
    "page": Page1,
  }
};
</script>

<style lang="less">
@import "./styles/common.less";
</style>
