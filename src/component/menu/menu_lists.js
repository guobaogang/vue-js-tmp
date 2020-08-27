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
        index: '1-1',
        children: [
            {
                title: 'Vue实例',
                route: '/home/instance',
                index: '1-1-1'
            },
            {
                title: '选项2',
                route: '/home/page2',
                index: '1-1-2'
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