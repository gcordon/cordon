import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start' // 开始界面
import Blog from '@/components/blog' // 博客主页
import Article from '@/components/article' //文章页面
import Message from '@/components/message' //留言页面
import About from '@/components/about' //个人页面

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
        path: '/article',
        name: 'article',
        component: Article,
    },
    {
        path: '/message',
        name: 'message',
        component: Message,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
  ]
})
