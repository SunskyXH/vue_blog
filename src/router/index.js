import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Blog from '../components/Blog'
import About from '../components/About'
import Article from '../components/Article'
import Tag from '../components/Tag'
// import Admin from '../Admin'

export default new Router({
  routes: [
		{ path: '/', component: Blog },
		{ path: '/About', component: About },
    { path: '/article/:id', component: Article },
    { path: '/tag/:name', component: Tag },
		{ path: '*', redirect: '/' }
  ]
})
