<template>
  <div class="content-wrap">
    <section class="content-doc">
      <div :class="'header level-'+level">{{content.title}}</div>
      <p v-html="content.desc"></p>
      <pre v-if="content.code" v-highlight>
        <code>{{content.code}}</code>
      </pre>
      <content-item :level="2" :list="content.children" v-if="content.children"></content-item>
    </section>
  </div>
</template>

<script src="./content.js"></script>

<style lang="less" scoped>
@import "./content.less";
</style>