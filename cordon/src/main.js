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

// markdown编辑器
        import VueQuillEditor from 'vue-quill-editor'
        // require styles
        import 'quill/dist/quill.core.css'
        import 'quill/dist/quill.snow.css'
        import 'quill/dist/quill.bubble.css'
        Vue.use(VueQuillEditor, /* { default global options } */)
// markdown编辑器



// element ui
Vue.use(ElementUI)
// axios

// 检测后台
// router.beforeEach((to, from, next) => {
//     let user = JSON.parse(sessionStorage.getItem('user'));
//     if ( to.path == '/login') {
//         next({ path: '/blog' })
//     } else {
//         next()
//     }
// })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
