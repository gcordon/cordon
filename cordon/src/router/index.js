import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start' // 开始界面
import Blog from '@/components/blog' // 博客主页
import Article from '@/components/article' //文章页面
import Message from '@/components/message' //留言页面
import About from '@/components/about' //个人页面

// 后台
import Login from '@/components/admin/login' // 登录页
import Test from '@/components/admin/test' // 测试页
import Admin from '@/components/admin/admin' // 后台主页
import adminHeader from '@/components/admin/header' // 后台主页导航
    import addArticle from '@/components/admin/addArticle' // 后台添加文章
    import showArticle from '@/components/admin/showArticle' // 后台显示文章
    import c from '@/components/admin/c' // 后台主页导航

Vue.use(Router)
// export default
export default new Router({
  mode: 'history',
  routes: [
    //   前台路由
    { path: '/',name: 'start',  component: Start,},
    { path: '/blog',name: 'blog',component: Blog,},
    { path: '/article', name: 'article',component: Article,},
    { path: '/message', name: 'message', component: Message, },
    { path: '/about', name: 'about', component: About, },

    //  后台路由
    { path: '/login', name: 'Login', component: Login, },
    //  测试的
    { path: '/test', name: 'Test', component: Test, },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: '/admin/header',
                name: 'header',
                component: adminHeader
            },
            {
                path: '/admin/addArticle',
                name: 'addArticle',
                component: addArticle
            },
            {
                path: '/admin/showArticle',
                name: 'showArticle',
                component: showArticle
            },
            {
                path: '/admin/c',
                name: 'c',
                component: c
            },
        ]
    },

    // { path: '*',redirect: '/blog',},
  ],
})
