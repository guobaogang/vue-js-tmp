<template>
  <div class="menu-wrap">
    <el-menu default-active="1" :router="true">
      <el-menu-item
        v-for="menu in menu_lists_no_sub"
        :key="menu.index"
        :index="menu.index"
        :route="menu.route"
      >
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
      <el-menu-item-group
        v-for="group in menu_lists_width_sub"
        :key="group.index"
        :index="group.index"
      >
        <span slot="title">{{group.title}}</span>
        <el-menu-item
          v-for="submenu in group.children"
          :key="submenu.index"
          :index="submenu.index"
          :route="submenu.route"
        >{{submenu.title}}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script src="./menu.js"></script>

<style lang="less">
@import "./menu.less";
</style>