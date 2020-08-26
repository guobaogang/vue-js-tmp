export default {
    title: 'Summary',
    desc: '这是一个测试页面',
    children: [{
        title: '目录1',
        desc: '这是第一层目录1',
        children: [{
            title: '目录1-1',
            desc: '这是第二层目录1-1',
        }, {
            title: '目录1-2',
            desc: '这是第二层目录1-2',
        }, {
            title: '目录1-3',
            desc: '这是第二层目录1-3',
        }, {
            title: '目录1-4',
            children: [{
                title: '目录1-4-1',
                desc: '这是第三层目录1-4-1<a href=https://www.baidu.com target=_blank>百度</a>',
            }]
        }, {
            title: '目录1-5',
            desc: '这是第二层目录1-5',
            code: `
            import { mapGetters } from 'vuex';
            import Header from '@/component/header/header.vue';
            import Menu from '@/component/menu/menu.vue';
            export default {
                name: "home",
                data() {
                    return {
                        pageName: "home"
                    };
                },
                components: {
                    'my-header': Header,
                    'my-menu': Menu
                },
                methods: {
            
                },
                computed: {
                    ...mapGetters(
                        { name: 'userName' }
                    )
                }
            };
            `
        }]
    }, {
        title: '目录2',
        desc: '这是第一层目录2',
        code: `
    <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
        `
    }, {
        title: '目录3',
        desc: '这是第一层目录3'
    }, {
        title: '目录4',
        desc: '这是第一层目录4'
    }, {
        title: '目录5',
        desc: '这是第一层目录5'
    }]
}