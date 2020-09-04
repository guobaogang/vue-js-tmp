export default {
    title: '表单输入绑定',
    children: [
        {
            title: '基础用法',
            desc: '一般如果要绑定input的数据，需要使用input的value和onchange事件做单向数据绑定。vue提供了v-model指令在表单 <span><</span>input>、<span><</span>textarea> 及 <span><</span>select> 元素上创建双向数据绑定。',
            children: [
                {
                    title: '注意v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。',
                },
                {
                    desc: `
                    v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
                    <ul>
                    <li>text 和 textarea 元素使用 value property 和 input 事件；</li>
                    <li>checkbox 和 radio 使用 checked property 和 change 事件；</li>
                    <li>select 字段将 value 作为 prop 并将 change 作为事件。</li>
                    </ul>
                    `
                }
            ]
        },
        {
            title: '修饰符',
            children: [
                {
                    title: '.lazy',
                    desc: '相当于在input的blur事件触发'
                },
                {
                    title: '.number',
                    desc: '将输入值转为数值类型，由于即使input设置的type="number"，HTML返回的值依然是字符串，加了.number之后，如果输入的值可以转化为number，则转化，否则返回原值。'
                },
                {
                    title: '.trim',
                    desc: '自动过滤用户输入的首尾空白字符'
                }
            ]
        },
        {
            title: '本节代码',
            code:`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>表单输入绑定</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            input输入： <input type="text" v-model="inputMsg"> 输入了：{{inputMsg}} <br>
            textArea输入： <textarea v-model="areaMsg"></textarea> 输入了：{{areaMsg}} <br>
            checkbox输入： <input type="checkbox" v-model="checkMsg"> 输入了：{{checkMsg}} <br>
            复选框输入: <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            输入了： {{checkedNames}}<br>

            radio输入： <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            输入了：{{picked}} <br>

            select输入：<select v-model="selected">
                <option disabled value="">请选择</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            输入了：{{selected}}<br>

            input lazy: <input type="text" v-model.lazy="lazyInput">
            输入了：{{lazyInput}}<br>

            input number: <input type="number" v-model.number="numberInput">
            输入了：{{numberInput}} 类型为:{{typeof numberInput}}<br>

            input trim: <input type="text" v-model.trim="trimInput">
            输入了：{{trimInput}}
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    inputMsg: '',
                    areaMsg: '',
                    checkMsg: false,
                    checkedNames: [],
                    picked: '',
                    selected: '',
                    lazyInput: '',
                    numberInput: '',
                    trimInput: ''
                },
                methods: {}
            });
        </script>
    </body>

    </html>
            `
        }
    ]
}