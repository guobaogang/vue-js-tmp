export default {
    title: '组件基础',
    desc: '组件是可复用的 Vue 实例，且带有一个名字：下面这个例子中是 <button-counter>',
    code: `
    // 定义一个名为 button-counter 的新组件
    Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })
    //可以在其他实例中将该组件作为自定义元素来使用。
    <div id="app">
        <button-counter></button-counter>
    </div>
    `,
    children: [
        {
            title: 'data必需是一个函数',
            desc: '不同于之前的data是一个对象，组件中的data必需是一个函数，这样每个实例可以维护一份被返回对象的独立的拷贝，否则会影响到其他所有的实例。'
        },
        {
            title: '解析 DOM 模板时的注意事项',
            desc: '有些 HTML 元素，诸如 <span><</span>ul>、<span><</span>ol>、<span><</span>table> 和 <span><</span>select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <span><</span>li>、<span><</span>tr> 和 <span><</span>option>，只能出现在其它某些特定的元素内部。比如我们创建了一个组件',
            code: `
            Vue.component('row',{
                tempalte: '<tr><td>this is a row</td></tr>'
            })

            <table>
                <row></row>
            </table>
            `,
            children: [
                {
                    desc: '在table下使用该自定义组件时，会被作为无效的内容提升到外部，并导致最终渲染结果出错。这时就需要一个特殊的is attribute来解决这个问题。',
                    code: `
    <table>
        <tr is="row"></tr>
    </table>
                    `
                }
            ]
        },
        {
            title: '使用ref',
            desc: '当在原生HTML元素上使用ref时，ref指向的是该元素，而当在组件上使用时，ref指向的是该组件的引用，可以通过this.$refs来获取。',
            code: `
    <div id="app">
        <button-counter ref="my-btn"></button-counter>
    </div>

    console.log(this.refs.my-btn)
            `
        },
        {
            title: '本节代码',
            code: `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>组件基础</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <my-button ref="btn1" @change="handleChange"></my-button>
            <my-button ref="btn2" @change="handleChange"></my-button>
            total: {{total}}
        </div>
        <script>
            Vue.component('my-button', {
                data: function () {
                    return {
                        number: 0
                    }
                },
                template: '<button @click="handleClick">点击了{{number}}次</button>',
                methods: {
                    handleClick: function () {
                        this.number++;
                        this.$emit('change');
                    }
                }
            })
            var vm = new Vue({
                el: '#app',
                data: {
                    total: 0
                },
                methods: {
                    handleChange: function () {
                        this.total = this.$refs.btn1.number + this.$refs.btn2.number
                    }
                }
            });
        </script>
    </body>

    </html>
            `
        }
    ]
}