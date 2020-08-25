const menu_lists = [
    {
        title: '概述',
        index: '1',
        route: '/home/summary'
    },
    {
        title: '分组一',
        index: '1-1',
        children: [
            {
                title: '选项1',
                route: '/home/page1',
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
    },
    {
        title: '导航二',
        icon: 'el-icon-menu',
        index: '2',
        route: '/home/page5'
    },
    {
        title: '导航三',
        icon: 'el-icon-document',
        index: '3',
        route: '/home/page5'
    },
    {
        title: '导航四',
        icon: 'el-icon-setting',
        index: '4',
        route: '/home/page5'
    }
];

export default menu_lists;