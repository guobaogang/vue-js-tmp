export default {
    title: 'Class 与 Style 绑定',
    desc: '操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。',
    children: [
        {
            title: '绑定 HTML Class',
            children: [
                {
                    title: '对象语法',
                    desc: '给v-bind:class传递对象，动态地切换class',
                    code: `
    <div :class="{active: isActive}"></div>
                `
                },
                {
                    desc: `上述语法中的key值active表示classs名称，value值isActive表示是否添加此class，所以只需要修改data中isActive即可动态切换class active。<br>
                    绑定的对象也不需要全部写在模板里面。
                `,
                    code: `
    <div :class="classObj"></div>

    {
        data:{
            active: true,
            'has-err': false
        }
    }
                `
                },
                {
                    title: '数组语法',
                    desc: '也可以把一个数组传入:class中，以应用一个class列表',
                    code: `
    <div :class="[activeClass, errClass]"></div>
    
    data:{
        activeClass: 'active',
        errClass: 'has-err'
    }
                `
                },
                {
                    desc: '也可以在数组中使用三元表达式或者对象语法',
                    code: `
    <div :class="[isActive ? activeClass : '', errClass]"></div>
    
    <div :class="[{active: isActive}, errClass]"></div>
                `
                }
            ]
        },
        {
            title: '绑定内联样式',
            desc: '上述绑定class的语法同样使用于内联样式',
            code: `
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    
    data: {
        activeColor: 'red',
        fontSize: 30
        }
        
        
    <div :style="styleObject"></div>
        
    data: {
    styleObject: {
        color: 'red',
        fontSize: '13px'
    }
    }
        
        
    <div :style="[baseStyles, overridingStyles]"></div>
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
        <title>Class 与 Style 绑定</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <style>
            .active {
                font-size: 30px;
            }

            .has-err {
                color: red;
            }
        </style>
    </head>

    <body>
        <div id="app">
            <div :class="classObj">对象语法绑定Class</div>
            <div :class="[activeClass, errClass]">数组语法绑定Class</div>
            <div :style="styleObj">对象语法绑定Style</div>
            <div :style="[colorStyles, paddingStyles]">数组语法绑定Style</div>
        </div>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    classObj: {
                        active: true,
                        'has-err': true
                    },
                    activeClass: 'active',
                    errClass: 'has-err',
                    styleObj: {
                        color: 'green',
                        'font-size': '20px'
                    },
                    colorStyles: {
                        color: 'red',
                        background: 'yellow'
                    },
                    paddingStyles: {
                        paddingLeft: '20px',
                        paddingBottom: '40px'
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