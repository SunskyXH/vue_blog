import Vue from 'vue'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import Hljs from 'highlight.js'
import 'highlight.js/styles/gruvbox-dark.css'
import 'element-ui/lib/theme-default/index.css'
import '../static/style.css'
import '../static/css/amazeui.min.css'
import '../static/css/ionicons.min.css'

import App from './App'
import store from './store'
import router from './router'

Vue.use(Element)
Vue.use(VueResource)
Vue.directive('highlightjs', {
  bind: function (el) {
    let blocks = el.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock)
  }
})
const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
