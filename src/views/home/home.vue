<template>
  <div class="home-wrap">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-container class="main-container">
        <el-aside width="auto">
          <my-menu />
        </el-aside>
        <el-container>
          <el-main>
            <router-view :key="$route.fullPath"></router-view>
          </el-main>
          <el-footer height="40">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script src="./home.js"></script>

<style lang="less">
@import "./home.less";
</style>