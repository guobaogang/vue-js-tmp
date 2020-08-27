import lifecycle from '../static/lifecycle.png';

export default {
    title: 'Vue实例',
    desc: '通过new修饰符加Vue函数就可以创建一个Vue实例',
    code: `
    var vm = new Vue({
        // 选项
      })
    `,
    children: [
        {
            desc: `当创建一个 Vue 实例时，你可以传入一个选项对象。
            作为参考，你也可以在<a target=_blank href=https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE>API 文档</a>中浏览完整的选项列表。
            `
        },
        {
            title: '生命周期图示',
            desc: '下图展示了Vue的生命周期。',
            image: lifecycle
        },
        {
            title: '实例生命周期钩子',
            desc: `生命周期钩子就是Vue实例在某一个时间点会自动执行的函数。<br>
                <ul>
                    <li>
                    <code>beforeCreate</code>: 当我们通过new Vue()创建了一个Vue的实例的时候，vue首先会初始化事件和生命周期相关的一些内容。<br>
                        之后vue会自动执行beforeCreate这个生命周期函数，然后处理一些注入和双向绑定的内容。
                    </li>
                    <li>
                    <code>created</code>: 当这些都处理完之后，vue的实例初始化基本已经完成，紧接着会执行生命周期函数created。
                    </li>
                    <li>
                    <code>beforeMount</code>: 接下来是一些关于模板的操作，此时虽然vue的实例已经完成，但是并没有挂载到页面上，在页面渲染之前会执行beforeMount函数。
                    </li>
                    <li>
                    <code>mounted</code>: 当vue生成dom并挂载到页面之后，会执行生命周期函数mounted。<br>
                        可以在beforeMount和mounted中分别输出一下this.$el(既Vue实例的挂载目标)，
                        可以发现beforeMount的时候el上并没有内容，而在mounted函数中已经有了dom元素。
                    </li>
                    <li>
                    <code>beforeUpdate</code>: 在数据发生改变，还没有重新渲染页面之前执行。
                    </li>
                    <li>
                    <code>updated</code>: 会在页面重新渲染之后执行。
                    </li>
                    <li>
                    <code>beforeDestroy</code>: 在Vue实例开始销毁之前执行。
                    </li>
                    <li>
                    <code>destroyed</code>: 在Vue实例完全销毁之后执行.
                    </li>
                </ul>
            `
        },
        {
            title: '通过以下代码可以验证Vue实例的生命周期',
            code: `
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Vue生命周期</title>
                <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
            </head>

            <body>
                <div id="app"></div>
                <script>
                    var vm = new Vue({
                        el: '#app',
                        template: '<div>{{message}}</div>',
                        data: {
                            message: 'Hello World'
                        },
                        beforeCreate: function () {
                            console.log('beforeCreate...')
                        },
                        created: function () {
                            console.log('created...')
                        },
                        beforeMount: function () {
                            console.log(this.$el)
                            console.log('beforeMount...')
                        },
                        mounted: function () {
                            console.log('mounted...')
                            console.log(this.$el)
                        },
                        beforeUpdate: function () {
                            console.log('beforeUpdate...')
                        },
                        updated: function () {
                            console.log('updated...')
                        },
                        beforeDestroy: function () {
                            console.log('beforeDestroy...')
                        },
                        destroyed: function () {
                            console.log('destroyed...')
                        }
                    });

                    setTimeout(function () {
                        vm.$data.message = 'bye world'
                    }, 2000);
                    setTimeout(function () {
                        vm.$destroy()
                    }, 4000); 
                </script>
            </body>

            </html>
            `
        }
    ]
}