import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/start'
import Blog from '@/components/blog'

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
  ]
})
