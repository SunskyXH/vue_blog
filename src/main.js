import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/style.css'
import '../static/css/amazeui.min.css'
import '../static/css/ionicons.min.css'

import App from './App'
import store from './store'
import router from './router'

Vue.use(Element)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
