const path = require('path');
const fs = require('fs');
const basePath = path.resolve(__dirname, '../src');
const argName = process.argv[2];
let dirPath = '', dirName = '';
console.log(process.argv);
if (!argName) {
    console.log('请输入组件名称');
    return;
}

dirPath = path.join(basePath, argName);

if (fs.existsSync(`${dirPath}`)) {
    console.log('该组件已存在，请检查');
    return;
}

if (argName.split('/').length > 0) {
    const dirArr = argName.split('/');
    dirName = dirArr[dirArr.length - 1];
    let tmpPath = basePath;
    if (!fs.existsSync(dirName)) {
        dirArr.forEach((value, i) => {
            tmpPath = path.join(tmpPath, value);
            if (!fs.existsSync(tmpPath)) {  //判断是否存在该目录
                fs.mkdirSync(tmpPath)
            }
        })
    }
} else {
    fs.mkdirSync(`${dirPath}`);
    dirName = argName;
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
}`;

process.chdir(`${dirPath}`);
fs.writeFileSync(`${dirName}.vue`, vueTmp);
fs.writeFileSync(`${dirName}.js`, jsTmp);
fs.writeFileSync(`${dirName}.less`, lessTmp);

process.exit(0);