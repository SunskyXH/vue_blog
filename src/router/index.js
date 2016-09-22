import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Blog from '../components/Blog'
import About from '../components/About'

export default new Router({
  routes: [
		{ path: '/', component: Blog },
		{ path: '/About', component: About },
		{ path: '*', redirect: '/' }
  ]
})
