export default {
    title: '模版语法',
    desc: `Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
        <br>
    在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。`,
    children: [{
        title: '插值',
        children: [{
            title: '文本',
            desc: '数据绑定最常见的就是双大括号形式的插值表达式。',
            code: '<div>{{message}}</div>',
            children: [
                {
                    desc: '还可以用v-text来绑定数据',
                    code: '<div v-text="message"></div>'
                }
            ]
        }, {
            title: '原始 HTML',
            desc: '插值表达式和v-text会将数据解释为字符串，如果需要输出真正的html，需要用到v-html。',
            code: '<div v-html="message"></div>'
        }, {
            desc: '需要注意的是，vue的指令后面的内容其实都是一个js表达式，而不是字符串，所以可以在里面写一些表达式。',
            code: '<div v-html="message+\'123\'"></div>'
        }, {
            title: 'Attribute',
            desc: '插值表达式不能作用于html attribute上，遇到这种情况应该使用v-bind指令。比如添加id',
            code: '<div v-bind:id="id"></div>'
        }, {
            title: 'v-bind可以缩写为:,所以上面的代码可以缩写为',
            code: '<div :id="id"></div>'
        }]
    }, {
        title: '指令',
        desc: '指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。',
        children: [
            {
                title: 'dom事件',
                desc: '可以通过v-on来监听dom事件，比如监听一个div的click事件:',
                code: '<div v-on:click="onClick">click me</div>'
            }, {
                title: 'v-on可以缩写为@,所以上面的代码可以缩写为',
                code: '<div @click="onClick">click me</div>'
            }
        ]
    }, {
        desc: '本节代码',
        code: `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue模版语法</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <div>{{message}}</div>
            <div v-text="message + ' 123'"></div>
            <div v-html="message + ' 456'"></div>
            <div :id="id" @click="onClick">click me</div>
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    message: '<h1>Hello World</h1>',
                    id: '1'
                },
                methods: {
                    onClick: function () {
                        alert('click event')
                    }
                }
            });
        </script>
    </body>

    </html>
        `
    }]
}