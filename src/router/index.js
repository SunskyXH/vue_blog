import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../pages/Index'
import Blog from '../pages/Home/Blog'
import Article from '../pages/Home/Article'
import Tag from '../pages/Home/Tag'
import About from '../pages/About/About'
import Archive from '../pages/Archive/Archive'
import Console from '../pages/Console/Console'
import Dashboard from '../pages/Console/Dashboard'
import ArticleManage from '../pages/Console/Article/ArticleManage'
import EditArticle from '../pages/Console/Article/EditArticle'
import AddArticle from '../pages/Console/Article/AddArticle'
import TagManage from '../pages/Console/Tag/TagManage'
import EditTag from '../pages/Console/Tag/EditTag'
import AddTag from '../pages/Console/Tag/AddTag'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Index,
      children: [
        { path: '', component: Blog },
        { path: 'about', component: About },
        { path: 'archive', component: Archive },
        { path: 'article/:id', component: Article },
        { path: 'tag/:name', component: Tag }
      ]
    },
    {
      path: '/console', component: Console,
      children: [
        { path: '', component: Dashboard },
        { path: 'dashboard', component: Dashboard },
        { path: 'article', component: ArticleManage },
        { path: 'article/:id', component: EditArticle },
        { path: 'tag', component: TagManage },
        { path: 'tag/:name', component: EditTag },
        { path: 'add/article', component: AddArticle },
        { path: 'add/tag', component: AddTag }
      ]
    },
		{ path: '*', redirect: '/' }
  ]
})
