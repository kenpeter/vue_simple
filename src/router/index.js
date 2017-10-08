// vue
import Vue from 'vue'
// vue route
import Router from 'vue-router'
// hello component
// @/components/Hello
import Hello from '@/components/Hello'

// vue use vue router
Vue.use(Router)

// Export default new
// Router
// With path /
// name hello
// component Hello
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
