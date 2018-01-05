// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Promise from 'bluebird' // 使用bluebird插件，兼容老式浏览器对promise的支持
import WebStorageCache from 'web-storage-cache'

console.log(Promise)
Vue.config.productionTip = false

/* 使用WebStorageCache设置存储一个拓美标识 */
const wsCache = new WebStorageCache()
window.ws = wsCache
window.ws.set('login', '1', { exp: 100 })
window.addEventListener('storage', function (e) {
  alert(e)
})

/* 路由跳转之前处理 */
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

/* 路由跳转之后处理 */
router.afterEach((to) => {
  console.log(to)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
