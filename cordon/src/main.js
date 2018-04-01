// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// jquery bootstrap 引入
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// axios 后台接口
import axios from 'axios'

// 图片懒加载vue-lazyload
import router from './router'

// element ui
Vue.use(ElementUI)
// axios


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
