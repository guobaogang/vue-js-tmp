import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/home.vue';
import Page1 from '@/views/page1/page1.vue';
import { getToken } from '@/utils/token';
import Login from '@/login/login.vue';
import Lost from '@/views/lost/lost.vue';
import Summary from '@/views/summary/summary.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/summary',
            children: [{
                path: 'summary',
                component: Summary
            }, {
                path: 'page1',
                component: Page1
            }, {
                path: 'page2',
                component: Page1
            }, {
                path: 'page3',
                component: Page1
            }, {
                path: 'page4',
                component: Page1
            }, {
                path: 'page5',
                component: Page1
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/page1',
            name: 'page1',
            component: Page1
        },
        {
            path: '*',
            name: 'lost',
            component: Lost
        }
    ]
});

// 登陆页面路由 name
const LOGIN_PAGE_NAME = 'login'

// 跳转之前
router.beforeEach((to, from, next) => {
    //过滤某些不需要登录即可访问的页面用
    //if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = getToken()
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页
        next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
        })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        // 未登陆且要跳转的页面是登录页
        next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: 'home' // 跳转到 home 页
        })
    } else {
        if (token) {
            next() // 跳转
        } else {
            next({
                name: LOGIN_PAGE_NAME
            })
        }
    }
    /* } else {
        next()
    } */
})

export default router;