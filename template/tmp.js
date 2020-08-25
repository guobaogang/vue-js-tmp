const path = require('path');
const fs = require('fs');
const basePath = path.resolve(__dirname, '../src');
const argName = process.argv[2];
let dirPath = '', dirName = '';

if (!argName) {
    console.log('请输入组件名称');
    return;
}

//如果输入了文件路径，根据路径添加，否则默认添加到views
if (argName.split('/').length > 1) {
    dirPath = path.join(basePath, argName);
    if (fs.existsSync(`${dirPath}`)) {
        console.log('该组件已存在，请检查');
        return;
    }
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
    dirPath = path.join(basePath, `/views/${argName}`);
    console.log(dirPath);
    if (fs.existsSync(`${dirPath}`)) {
        console.log('该组件已存在，请检查');
        return;
    }
    fs.mkdirSync(`${dirPath}`);
    dirName = argName;
}

const vueTmp = `<template>
    <div class="${dirName}-wrap">{{pageName}}</div>
</template>

<script src="./${dirName}.js"></script>

<style lang="less" scoped>
    @import "./${dirName}.less";
</style>`;

const jsTmp = `import { mapMutations, mapGetters } from "vuex";

export default {
    name: "${dirName}",
    data() {
        return {
            pageName: "${dirName}",
        };
    },
    methods: {
        ...mapMutations([])
    },
    computed: {
        ...mapGetters()
    }
};`;

const lessTmp = `.${dirName}-wrap{
}`;

process.chdir(`${dirPath}`);
fs.writeFileSync(`${dirName}.vue`, vueTmp);
fs.writeFileSync(`${dirName}.js`, jsTmp);
fs.writeFileSync(`${dirName}.less`, lessTmp);

process.exit(0);