<template>
  <div class="home-wrap">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script src="./home.js"></script>

<style lang="less">
@import "./home.less";
</style>