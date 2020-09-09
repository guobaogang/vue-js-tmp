export default {
    title: 'Prop',
    children: [
        {
            title: 'Prop 的大小写',
            desc: `HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。
            所以在子组件中使用驼峰命名法的props名，在父组件传值时需要使用其等价的短横线命名法。
            `,
            code: `
            var child = {
                props: ['postTitle'],
                template: '<div>{{postTitle}}</div>',
                methods: {
                }
            }

            <child post-title="hello"></child>
            `
        },
        {
            title: 'Prop验证',
            desc: `在父组件传值的时候，如果我们想指定传递的值的数据类型，是否必输等，就需要用到prop验证。<br>
            如果校验失败，不会报错，代码也可以运行，不过会在控制台打出warning。使用方法如下：`,
            code: `
    var child = {
            props: {
                // 基础的类型检查 ('null' 和 'undefined' 会通过任何类型验证)
                propA: Number,
                // 多个可能的类型
                propB: [String, Number],
                // 必填的字符串
                propC: {
                    type: String,
                    required: true
                },
                // 带有默认值的数字
                propD: {
                    type: Number,
                    default: 100
                },
                // 带有默认值的对象
                propE: {
                    type: Object,
                    // 对象或数组默认值必须从一个工厂函数获取
                    default: function () {
                    return { message: 'hello' }
                    }
                },
                // 自定义验证函数
                propF: {
                    validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                    }
                }
        }
    }
            `
        },
        {
            title: '非 Prop 的 Attribute',
            desc: '如果父组件传来一个值，但是在子组件的props中没有对应的接收参数，那么这个Attribute就是一个非 Prop 的 Attribute。这些 attribute 会被添加到这个子组件的根元素上。比如：',
            code: `
    <child post-title="hello" no-prop="no-prop"></child>

    var child = {
        props: ['postTitle'],
        template: '<div>{{postTitle}}</div>',
        methods: {
        }
    }

    //生成的HTML页面为
    <div no-prop="no-prop">hello</div>
            `
        },
        {
            title: '绑定原生事件',
            desc: `如果要在子组件上绑定原生事件，比如在child上绑定click事件，一般来说需要在子组件的根元素上添加click事件，并通过this.$emit调用。<br>
                但这样太麻烦了，这个时候可以使用.native修饰符。
            `,
            code: '<child @click.native="handleClick"></child>'
        },
        {
            title: '本节代码',
            code: `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prop</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    
    <body>
        <div id="app">
            <child @click.native="handleClick" no-prop="no-prop" :name="myName"></child>
        </div>
        <script>
            var child = {
                props: {
                    postTitle: {
                        type: String,
                        require: false,
                        default: 'hello world'
                    },
                    name: {
                        type: String,
                        require: true,
                        validator: function (value) {
                            return value.length > 4
                        }
                    }
                },
                template: '<div>{{postTitle}}---{{name}}</div>',
                methods: {
                }
            }
            var vm = new Vue({
                el: '#app',
                data: {
                    myName: 'Lufy'
                },
                components: {
                    child
                },
                methods: {
                    handleClick: function(){
                        this.myName="Monkey D Lufy"
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