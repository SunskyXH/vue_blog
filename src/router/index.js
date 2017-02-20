import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App'
import Blog from '../pages/Home/Blog'
import Tag from '../pages/Tag/Tag'
import TagSummary from '../pages/Tag/TagSummary'
import Category from '../pages/Category/Category'
import CategorySummary from '../pages/Category/CategorySummary'
import About from '../pages/About/About'
import Archive from '../pages/Archive/Archive'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Blog },
    { path: '/article/:id', component: Blog },
    { path: '/about', component: About },
    { path: '/archive', component: Archive },
    { path: '/tag', component: TagSummary },
    { path: '/tag/:name', component: Tag },
    { path: '/category', component: CategorySummary },
    { path: '/category/:name', component: Category },
    { path: '*', redirect: '/' }
  ]
})
