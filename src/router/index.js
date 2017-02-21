import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App'
import Blog from '../pages/Home/Blog'
import Tag from '../pages/Tag/Tag'
import Category from '../pages/Category/Category'
import About from '../pages/About/About'
import Archive from '../pages/Archive/Archive'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Blog },
    { path: '/article/:id', component: Blog },
    { path: '/about', component: About },
    { path: '/archive', component: Archive },
    { path: '/tag', component: Tag },
    { path: '/tag/:name', component: Tag },
    { path: '/category', component: Category },
    { path: '/category/:name', component: Category },
    { path: '*', redirect: '/' }
  ]
})
