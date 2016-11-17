<template>
  <div>
  <br>
  <div class="blog-main" >
        <div class="blog-post" v-for="blog in blogs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><router-link to="#"> {{blog.cat1}} </router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link to="#"> {{blog.cat2}} </router-link></el-breadcrumb-item>
        </el-breadcrumb>
            <router-link :to="{ path:'article/'+blog.id }"><h2 class="blog-post-title">{{blog.title}}</h2></router-link>
            <p class="blog-post-meta">
              <i class="el-icon-date"> {{blog.date}}</i>
            </p>
            <div v-html="blog.content" v-highlightjs></div>
              <hr>
            <p>
              <span class="am-icon-tags"> </span> &nbsp;
              <slot v-for="tag of blog.tags">
                <router-link :to="{ path:'/tag/'+tag.name }"><span :class="'am-badge '+'am-badge-'+tag.color+' am-round'">{{tag.name}}</span></router-link>&nbsp;
              </slot>
            <p>
        </div>
  </div>
  </div>
</template>
<style scoped>
  /*
   * Blog name and description
   */
  .blog-header {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .blog-title {
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 60px;
    font-weight: normal;

  }
  .blog-description {
    font-size: 20px;
    color: #999;
  }
  /*
   * Main column and sidebar layout
   */
  .blog-main {
    font-size: 16px;
    line-height: 1.428;
  }

  /* Pagination */
  .pager {
    margin-bottom: 60px;
    text-align: left;
  }
  .pager > li > a {
    width: 140px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 30px;
  }
  /*
   * Blog posts
   */
  .blog-post {
    margin-bottom: 60px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .blog-post-title {
    margin-bottom: 5px;
    font-size: 40px;
  }

  .blog-post-meta {
    margin-bottom: 20px;
    color: #999;
  }

  a {
    color: #13CE66;
    text-decoration: none;
    background: transparent;
  }

  /*
   * Footer
   */
  .blog-footer {
    padding: 40px 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: 1px solid #e5e5e5;
  }
  .blog-footer p:last-child {
    margin-bottom: 0;
  }
</style>
<script>
  import store from '../store/index'
  export default {
    name: 'blog',
    components: {
    },
    mounted () {
      this.fetchArticles()
    },
    watch: {},
    methods: {
      fetchArticles () {
        this.$http.get('http://localhost:8888/get_articles')
          .then(function (ret) {
            this.blogs = ret.data['articles']
            setTimeout(() => {
              store.commit('finishLoading')
            }, 1000)
            // store.commit('finishLoading')
          })
          .then(function (err) {
            if (err) {
              console.log(err)
            }
          })
      }
    },
    data () {
      var blogs = this.blogs
      return {
        blogs: blogs
      }
    }
  }
</script>
