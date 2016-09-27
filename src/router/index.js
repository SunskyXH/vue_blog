import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../components/Index'
import Blog from '../components/Blog'
import About from '../components/About'
import Article from '../components/Article'
import Tag from '../components/Tag'
import Console from '../components/Console'
import ArticleManage from '../components/ArticleManage'
import TagManage from '../components/TagManage'

export default new Router({
  routes: [
    {
      path: '/', component: Index,
      children: [
        { path: '', component: Blog },
        { path: '/about', component: About },
        { path: '/article/:id', component: Article },
        { path: '/tag/:name', component: Tag }
      ]
    },
    {
      path: '/console', component: Console,
      children: [
        { path: 'article', component: ArticleManage },
        { path: 'tag', component: TagManage }
      ]
    },
		{ path: '*', redirect: '/' }
  ]
})
