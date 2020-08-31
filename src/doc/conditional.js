export default {
    title: '条件渲染',
    children: [
        {
            title: 'v-if',
            desc: 'v-if指令用于条件性的渲染某一块的内容，这块内容只有在表达式结果为真时才会渲染。',
            code: '<div v-if="isShow">Hello World</div>'
        },
        {
            title: 'v-if用于template',
            desc: `v-if可以作用于template，用来切换多个元素的显示隐藏。不用div包裹是由于最终的渲染结果不会包含<span><</span>template>元素。`,
            code: `
    <template v-if="isShow">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </template>
        `
        }, {
            title: 'v-else,v-else-if',
            desc: '如同js中的if-else语法，vue也可以使用v-else和v-selse-if表示else和else-if块。需要注意的是v-else，v-else-if 必须紧跟在带 v-if 或者 v-else-if 的元素之后。',
            code: `
    <div v-if="num === 1">
        1
    </div>
    <div v-else-if="num === 2">
        2
    </div>
    <div v-else>
        other
    </div>
        `
        },
        {
            title: '用 key 管理可复用的元素',
            desc: '为了高效的利用可重复元素，Vue通常会复用已有元素而不是从头开始渲染。这样的处理效率很高，但有时也会出现问题，比如下面的代码',
            code: `
    <template v-if="showUserName">
        <label>Username</label>
        <input>
    </template>
    <template v-else>
        <label>Email</label>
        <input>
    </template>
        `
        },
        {
            desc: '在userName下输入后，切换showUserName，发现email下的input中还保留着之前的数据。这就是由于复用引起的，要避免这种问题，只需要添加一个具有唯一值的 key attribute 即可，这种做法表达“这两个元素是完全独立的，不要复用它们”。',
            code: `
    <template v-if="showUserName">
        <label>Username</label>
        <input v-key="user-name">
    </template>
    <template v-else>
        <label>Email</label>
        <input v-key="email">
    </template>
            `
        },
        {
            title: 'v-show',
            desc: 'v-show的使用方法和v-if大致一样。'
        },
        {
            title: 'v-if和v-show的区别',
            desc: `
                <ul>
                <li>
                v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。<br>
                v-show的元素会始终渲染并保留在dom中，只是简单地切换元素的 CSS property display。
                </li>
                <li>
                v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。<br>
                v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
                </li>
                <li>
                v-show 不支持<span><</span>template>元素，也不支持 v-else。
                </li>
                <li>
                一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
                </li>
                </ul>
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
    <title>条件渲染</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <template v-if="show">
            <label>User Name</label>
            <input key="user-name">
        </template>
        <template v-else>
            <label>Email</label>
            <input key="email">
        </template>
        <button @click="toggle">toggle</button>
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                show: true
            },
            methods: {
                toggle: function(){
                    this.show = !this.show
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