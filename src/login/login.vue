<template>
<div class="login-wrap">
    {{pageName}}
    Name: <input @change="nameChange" :value="name">
    <button @click="login">login</button>
</div>
</template>

<script src="./login.js"></script>

<style lang="less">
@import "./login.less";
</style>