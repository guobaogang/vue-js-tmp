const path = require('path');
const fs = require('fs');
const basePath = path.resolve(__dirname, '../src');
const dirName = process.argv[2];

if (!dirName) {
    console.log('请输入组件名称');
    return;
}

if (fs.existsSync(`${basePath}/component/${dirName}`)) {
    console.log('该组件已存在，请检查');
    return;
}

const vueTmp = `<template>
<div class="${dirName}-wrap">{{pageName}}</div>
</template>

<script src="./${dirName}.js"></script>

<style lang="less">
@import "./${dirName}.less";
</style>`;

const jsTmp = `export default {
    name: "${dirName}",
    data() {
        return {
            pageName: "${dirName}",
        };
    }
};`;

const lessTmp = `.${dirName}-wrap{
    color: aqua;
}`;

fs.mkdirSync(`${basePath}/views/${dirName}`);
process.chdir(`${basePath}/views/${dirName}`);
fs.writeFileSync(`${dirName}.vue`, vueTmp);
fs.writeFileSync(`${dirName}.js`, jsTmp);
fs.writeFileSync(`${dirName}.less`, lessTmp);

process.exit(0);