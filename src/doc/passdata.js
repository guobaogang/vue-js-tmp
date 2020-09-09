export default {
    title: '父子组件传值',
    children: [
        {
            title: '父组件向子组件传值',
            desc: `父组件通过属性的形式向子组件传值，子组件中通过props属性接收父组件传来的值。<br>
                虽然子组件中可以直接只用并修改父组件传来的值，但是这样并不符合规范，如果父组件传过来的是一个引用类型的数据，会影响到其他子组件。<br>
                所以在子组件中，需要克隆父组件传过来的值，然后再使用。<br>
                父组件传值时可以使用v-bind:，也可以不用，不用的时候当成字符串处理，使用的时候是传递表达式。
            `,
            code: `
    var myButton = {
        props: ['count'],
        data: function () {
            return {
                number: { ...this.count }
            }
        },
        template: '<button @click="handleClick">点击了{{number.number}}次</button>',
        methods: {
            handleClick: function () {
                this.number.number++;
            }
        }
    }
    var vm = new Vue({
        el: '#app',
        data: {
            count: {
                number: 0
            }
        },
        components: {
            'my-button': myButton
        }
    });
            `
        },
        {
            title: '子组件向父组件传值',
            desc: `子组件可以通过$emit来调用父组件传进来的方法，这时也可以通过$emit的其他参数来向父组件传值。`
        },
        {
            title: '本节代码',
            code: `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>父子组件传值</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
    <div id="app">
        <my-button :count="count" @change="handleClick"></my-button>
        <my-button :count="count" @change="handleClick"></my-button>
        total: {{total}}
    </div>
    <script>
        var myButton = {
            props: ['count'],
            data: function () {
                return {
                    number: { ...this.count }
                }
            },
            template: '<button @click="handleClick">点击了{{number.number}}次</button>',
            methods: {
                handleClick: function () {
                    this.number.number += 2;
                    this.$emit('change', 2, 3)
                }
            }
        }
        var vm = new Vue({
            el: '#app',
            data: {
                count: {
                    number: 0
                },
                total: 0
            },
            components: {
                'my-button': myButton
            },
            methods: {
                handleClick: function (step, step2) {
                    console.log(step2);
                    this.total += step;
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