export default {
    title: '事件处理',
    children: [
        {
            title: '监听事件',
            desc: `
            可以使用v-on指令监听dom事件，也可以缩写为@，并在指令的值中添加方法或者调用方法名。
            `,
            code: `
            <div v-on:click="counter += 1">Add</div>
            <div @click="fun1">fun1</div>
            <div @click="fun2(1)">fun2</div>
            `,
            children: [
                {
                    desc: '上面调用方法名来触发方法的两种方式，不同之处在于第一个会默认接受点击的event方法，但是不能传递参数；第二个可以传递参数，如果需要传event方法，用特殊变量 $event传入。',
                    code: '<div @click="fun3(1, $event)">fun3</div>'
                }
            ]
        },
        {
            title: '事件修饰符',
            desc: `js的事件处理过程中，经常会出现event.preventDefault()或者event.stopPropagation()方法，虽然在Vue中也可以通过$event实现，但是Vue提供了更方便的事件修饰符解决这个问题。常用的事件修饰符有：
            <ul>
            <li><code>.stop</code>阻止事件冒泡，相当于调用event.stopPropagation()</li>
            <li><code>.prevent</code>提交事件不再重载页面，相当于调用event.preventDefault()</li>
            <li><code>.capture</code>添加事件监听器时使用事件捕获模式，既不同于冒泡模式，事件由外向内处理。</li>
            <li><code>.self</code>只当在 event.target 是当前元素自身时触发处理函数。即触发事件不是从内部触发，而是自身触发的。</li>
            <li><code>.once</code>点击事件只触发一次</li>
            <li><code>.passive</code>滚动事件的默认行为 (即滚动行为) 将会立即触发，而不会等待 onScroll 完成</li>
            </ul>
            `,
        },
        {
            title: '按键修饰符',
            desc: `监听键盘事件时可以添加按键修饰符，比如监听enter按下的动作，可以使用@keydown.enter，其他按键都不会触发。相似的还有.enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right等。`
        },
        {
            title: '系统修饰键',
            desc: '可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器，.ctrl .alt .shift .meta，即只有当按下这个按键时才可以触发监听事件。'
        },
        {
            title: '鼠标按钮修饰符',
            desc: '可以用如下修饰符会限制处理函数仅响应特定的鼠标按钮，.left .right .middle。'
        },
        {
            title: '本节代码',
            code:`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>事件处理</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <div @click="outer">
                outer
                <div @click.stop="inner">inner(阻止冒泡)</div>
            </div>
            <div @click.capture="outer">
                capture outer
                <div @click.capture="inner">capture inner</div>
            </div>
            <div @click.shift="testShit">
                test shift
            </div>
            <input @keydown.ctrl="testCtrl"/>
            <div @click.right="rightClick">right click</div>
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                },
                methods: {
                    inner: function(){
                        console.log('inner')
                    },
                    outer: function(){
                        console.log('outer')
                    },
                    testShit: function(){
                        console.log('shift')
                    },
                    testCtrl: function(e){
                        console.log(e.target.value)
                    },
                    rightClick: function(){
                        console.log('right click')
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