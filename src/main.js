import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './app.css'
import vueHljs from 'vue-hljs/dist/vue-hljs'
import App from './App'
import store from './store'
import router from './router'

Vue.use(Element)
Vue.use(vueHljs)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
