import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Personal from './personal'
import Demo from './demo'

Vue.use(Router)

console.log(Home)
export default new Router({
  routes: [
    ...Home,
    ...Personal,
    ...Demo
  ]
})
