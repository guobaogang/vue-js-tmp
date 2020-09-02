export default {
    title: '列表渲染',
    children: [
        {
            title: 'v-for解析数组',
            desc: `我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。<br>
                v-for支持可选的第二个参数，既当前想的索引。
            `,
            code: `
            <div v-for="(item,index) in items">
            {{item}} -- {{index}}
            </div>

            data:{
                items: ['hello', 'world']
            }
            `
        },
        {
            title: 'v-for解析对象',
            desc: `可以用 v-for 来遍历一个对象的 property。<br>
            还可以提供第二个参数作为property 名称和第三个参数作为索引。
            `,
            code: `
                <div v-for="(value,name,index) in object"></div>

                data:{
                    object: {
                        name: 'Monkey D Luffy',
                        age: 17
                    }
                }
            `
        }, {
            title: '维护状态',
            desc: `基于渲染性能上的考虑，需要给每一项提供唯一的key。<br>
            key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
            而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。<br>
            有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。<br>
            这样，当数组发生变化时，虚拟dom对比key值，就不会重复渲染之前已经渲染好的，key值没有变化的dom。<br>
            所以虽然index可以作为key，但是除了极为简单的数组之外，最好不好使用index作为key。因为如果unshift一个元素，index将会全部发生改变，这样所有dom都需要重新渲染。`
        },
        {
            title: '数组更新检测',
            children: [{
                title: '变更方法',
                desc: `
                数组变化可以触发视图更新，但是并不是所有的改变方法都能触发，比如vm.itmes[1] = 'test'这种直接修改数据的，并不能触发视图更新。能触发的方法包括：
                <ul>
                <li>push()</li>
                <li>pop()</li>
                <li>shift()</li>
                <li>unshift()</li>
                <li>splice()</li>
                <li>sort()</li>
                <li>reverse()</li>
                </ul>
                `
            }, {
                title: '替换数组',
                desc: `除了上述的方法可以触发视图更新外，还可以直接替换原来的数组，相当于改变了原来的数组应用。<br>
                你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。`,
                code: `
                example1.items = example1.items.filter(function (item) {
                    return item.message.match(/Foo/)
                  })
                `
            },{
                title: 'set方法',
                desc: '也可以通过set方法修改数据，set方法既是Vue的全局方法，也是一个实例方法，所以可以用Vue.set或者vm.$set调用。第一个参数为需要修改的对象，第二个为object的key或者array的下标，第三个参数为修改后的数据。',
                code: `
            Vue.set(vm.object, 'gender', 'male')

            vm.$set(vm.items, 1, 'test1')
                `
            }]
        },
        {
            title: '在<template>上使用 v-for',
            desc: '类似于v-if，v-for 也可以在<span><</span>template>上使用，来渲染包含多个元素的内容。',
            code: `
            <ul>
            <template v-for="item in items">
              <li>{{ item.msg }}</li>
              <li class="divider" role="presentation"></li>
            </template>
          </ul>
            `
        },
        {
            title: '简单的todolist',
            code:`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>列表渲染</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <div>
                add TODO:
                <input v-model="newTodo">
                <button @click="add">Add</button>
            </div>
            <div v-for="(item,index) in todoList" :key="item.id">
                <span>{{item.text}}</span>
                <button @click="remove(index)">remove</button>
            </div>
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    todoList: [],
                    newTodo: '',
                    nextId: 1
                },
                methods: {
                    add: function () {
                        this.todoList.push({
                            id: this.nextId++,
                            text: this.newTodo
                        });
                        this.newTodo = '';
                    },
                    remove: function (index) {
                        this.todoList.splice(index, 1);
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