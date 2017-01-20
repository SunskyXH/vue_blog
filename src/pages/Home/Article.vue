<template>
  <div>
  <br>
  <div class="blog-main">
        <div class="blog-post">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><router-link to="#"> {{article.cat1}} </router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link to="#"> {{article.cat2}} </router-link></el-breadcrumb-item>
        </el-breadcrumb>
            <h2 class="blog-post-title">{{article.title}}</h2>
            <p class="blog-post-meta">
              <i class="el-icon-date"> {{article.date}}</i>
            </p>
            <div v-html="article.content" v-highlightjs></div>
              <hr>
            <p>
              <span class="am-icon-tags"> </span> &nbsp;
              <slot v-for="tag of article.tags">
                <router-link :to="{ path:'/tag/'+tag.name }"><span :class="'am-badge '+'am-badge-'+tag.color+' am-round'">{{tag.name}}</span></router-link>&nbsp;
              </slot>
            <p>
        </div>
  </div>
  </div>
</template>
<style scoped>
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
</style>
<script>
export default {
  mounted () {
    this.fetchArticle()
  },
  watch: {
    '$route': 'fetchArticle'
  },
  methods: {
    fetchArticle () {
      this.$http.get('http://localhost:8888/get_articles/' + this.$route.params.id)
        .then(function (ret) {
          this.article = ret.data['article'][0]
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    }
  },
  data () {
    var article = this.article
    return {
      article: article
    }
  }
}
</script>
