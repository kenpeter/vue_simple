// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// vue
import Vue from 'vue'
// Layout vue component
import App from './App'
// router with hello etc....
import router from './router'

// vue config production tip
// false
Vue.config.productionTip = false

/* eslint-disable no-new */
// Why need to new?
new Vue({
  // Inject #app in index.html
  el: '#app',
  // with Hello component and other components
  router,
  // <App /> more about the html code
  template: '<App/>',
  // Layout vue component in new Vue
  components: { App }
})
