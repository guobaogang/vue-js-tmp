<template>
  <div class="contentItem-wrap">
    <div v-for="(item, index) in list" :key="index">
      <div v-if="item.title" :class="'header level-'+level">{{item.title}}</div>
      <p v-if="item.desc" v-html="item.desc"></p>
      <pre v-if="item.code" v-highlight>
        <code>{{item.code}}</code>
      </pre>
      <content-item :level="level+1>3?3:level+1" :list="item.children" v-if="item.children"></content-item>
    </div>
  </div>
</template>

<script src="./contentItem.js"></script>

<style lang="less" scoped>
@import "./contentItem.less";
</style>