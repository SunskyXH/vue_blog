import 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'amazeui-vue/dist/amazeui-vue'
import 'amazeui/dist/css/amazeui.css'
// import 'assets/style.css'
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

/* eslint-disable no-new */

router.map({
  '/': {
    component: App
  },
  '/about': {
    component: App
  },
  '/add': {
    component: App
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
