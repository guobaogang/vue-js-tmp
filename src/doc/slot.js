export default {
    title: '插槽',
    desc: `如果一个子组件中显示的HTML内容，依赖于父组件的传递，按照之前的做法，可以传入html内容，子组件中通过v-html来解析。<br>
    但是这种做法对于较复杂的html内容非常不友好，几乎无法使用，这个时候就要用到插槽。`,
    children: [
        {
            title: '简单用法',
            desc: `插槽相当于在子组件内部放置一个占位符，表明此处内容依赖于父组件传递，然后将父组件中的children放置插槽的位置。`,
            code: `
        var child = {
            template: \`
                <div>
                    <p>Hello</p>
                    <slot></slot>
                </div>
            \`
        }

        <child>
            <h1>Luffy</h1>
        </child>
            `,
            children: [
                {
                    desc: '在以上代码中，子组件slot位置的内容，就是父组件中child中包裹的内容。在slot中也可以添加默认内容，如果父组件不传值，则显示默认内容。',
                    code: `
            var child = {
                template: \`
                    <div>
                        <p>Hello</p>
                        <slot>Nico Robin</slot>
                    </div>
                \`
            }
    
            <child>
            </child>
                    `
                }
            ]
        },
        {
            title: '具名插槽',
            desc: '有的时候，子组件中需要分不同的区域接受不同的内容，这个时候时候就需要多个插槽，为了让每个插槽能区分开来，需要给不同的插槽命名。',
            code: `
    <child>
        <h1 slot="head">Nico Robin</h1>
        <div slot="foot">
            <h2>Monkey D Luffy</h2>
        </div>
    </child>

    var child = {
        template: \`
            <div>
                <slot name="head"></slot>
                <p>Hello</p>
                <slot name="foot"></div>
            </div>
        \`
    }
            `,
            children: [
                {
                    desc: `通过具名插槽，就可以清楚的指定child中的内容分别对应的是子组件中的哪个插槽。<br>
                    同样，具名插槽也可添加默认值。<br>
                    多个插槽可以允许有一个不具名，比如下面的用法，从中也可以看出，<span style="font-weight: bold;">是子组件中插槽的位置而不是父组件中书写的位置决定了最终展示的位置。</span>
                    `,
                    code: `
    <child>
        <h1 slot="foot">Nico Robin</h1>
        <div>
            <h2>Monkey D Luffy</h2>
        </div>
    </child>

    var child = {
        template: \`
            <div>
                <slot></slot>
                <p>Hello</p>
                <slot name="foot"></div>
            </div>
        \`
    }
                    `
                }
            ]
        }
    ]
}