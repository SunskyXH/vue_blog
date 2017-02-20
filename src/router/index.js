import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App'
import Blog from '../pages/Home/Blog'
import Tag from '../pages/Home/Tag'
import About from '../pages/About/About'
import Archive from '../pages/Archive/Archive'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Blog },
    { path: '/article/:id', component: Blog },
    { path: '/about', component: About },
    { path: '/archive', component: Archive },
    { path: '/tag/:name', component: Tag },
		{ path: '*', redirect: '/' }
  ]
})
