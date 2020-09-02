const menu_lists = [
    {
        title: '概述',
        index: '1',
        route: '/home/summary'
    },
    {
        title: '脚手架',
        index: '2',
        route: '/home/cli'
    },
    {
        title: 'Vue',
        index: '3',
        children: [
            {
                title: 'Vue实例',
                route: '/home/instance',
                index: '3-1'
            },
            {
                title: '模板语法',
                route: '/home/syntax',
                index: '3-2'
            },
            {
                title: '计算属性和监听器',
                route: '/home/computed',
                index: '3-3'
            },
            {
                title: 'Class 与 Style 绑定',
                route: '/home/clzbind',
                index: '3-4'
            },
            {
                title: '条件渲染',
                route: '/home/conditional',
                index: '3-5'
            },
            {
                title: '列表渲染',
                route: '/home/list',
                index: '3-6'
            },
            {
                title: '事件处理',
                route: '/home/events',
                index: '3-7'
            }
        ]
    },
    {
        title: '分组2',
        index: '1-2',
        children: [
            {
                title: '选项3',
                route: '/home/page3',
                index: '1-2-1'
            }
        ]
    },
    {
        title: '分组3',
        index: '1-3',
        children: [
            {
                title: '选项4',
                route: '/home/page4',
                index: '1-3-1'
            }
        ]
    }
];

export default menu_lists;