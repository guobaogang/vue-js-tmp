export default {
    title: '计算属性和侦听器',
    children: [{
        title: '计算属性',
        desc: `虽然在上一节中说可以在插值表达式或者指令中写一些表达式，但是如果是比较复杂的逻辑，应该使用计算属性。<br>
            比如data中有firstName和lastName两个属性，html上想显示fullName，那么除了firstName+lastName，最好使用计算属性来解决这个问题。`,
        code: `
            computed: {
                fullName: function(){
                    return this.firstName + " " + this.lastName
                }
            }
        `,
        children: [{
            title: '计算属性的缓存机制',
            desc: `虽然计算属性和{{this.firstName + " " + this.lastName}}都可以实现显示fullName的效果，不同的是计算属性是基于它们的响应式依赖进行缓存的。
            只有当计算属性依赖的firstName和lastName发生改变时才会重新计算,而插值表达式在任何数据改变时都会重新计算，当页面有性能开销比较大的计算属性时，可以避免多次无用的计算。
            `,
        }]
    }, {
        title: '侦听器',
        desc: `除此之外，还可以使用侦听器来处理，既可以监听firstName和lastName，如果任何一个值发生变化，则重新计算fullName。`,
        code: `
            watch: {
                firstName: function(){
                    this.fullName = this.firstName + " " + this.lastName
                },
                lastName:function(){
                    this.fullName = this.firstName + " " + this.lastName
                }
            }
        `,
        children: [{
            desc: `侦听器也是有缓存的，但是相比计算属性，代码会相对复杂一点，所以如果可以同时使用计算属性和侦听器，最好选择计算属性。`,
        }]
    },
    {
        title: '本节代码',
        code: `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue计算属性和侦听器</title>
            <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        </head>

        <body>
            <div id="app">
                <div>{{fullName1}}</div>
                <div>{{fullName}}</div>
            </div>
            <script>
                var vm = new Vue({
                    el: '#app',
                    data: {
                        firstName: 'Monkey',
                        lastName: 'Luffy',
                        fullName1: 'Monkey Luffy'
                    },
                    computed: {
                        fullName: function () {
                            return this.firstName + ' D ' + this.lastName
                        }
                    },
                    watch: {
                        firstName: function () {
                            this.fullName1 = this.firstName + ' ' + this.lastName
                        },
                        lastName: function () {
                            this.fullName1 = this.firstName + ' ' + this.lastName
                        }
                    }
                });

                setTimeout(function () {
                    vm.$data.lastName = 'Dragon'
                }, 2000)
            </script>
        </body>

        </html>
        `
    }
]
}