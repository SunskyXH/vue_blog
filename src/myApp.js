import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
Vue.use(VueResource)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }

