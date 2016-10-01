<template>
  <div>
  <br>
  <div class="blog-main">
      <div class="blog-post"  v-if="hasArticle">
        <h3>包含标签{{$route.params.name}}的文章如下</h3>
        <hr />
        <section v-for="article in articles">
          <router-link :to="{ path:'/article/'+article.id }"><span class="blog-post-title">{{article.title}}</span></router-link>
          <span class="blog-post-meta">
            <i class="el-icon-date"> {{article.date}}</i>
          </span>
          <hr />
        </section>
      </div>
      </div>
      <div class="blog-post" v-if="!hasArticle">
        {{$route.params.name}}下暂时没有文章
      </div>
  </div>
</template>
<style scoped>
  .blog-post {
    margin-bottom: 10px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  a .blog-post-title {
    text-decoration: none;
    background: transparent;
    color: #20A0FF;
  }
  .blog-post-meta {
    background: transparent;
    float: right;
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
    this.$http.get('http://localhost:8888/get_articles_tag/' + this.$route.params.name)
      .then(function (ret) {
        this.articles = ret.data['articles']
        if (this.articles.length === 0) {
          this.hasArticle = false
        } else {
          this.hasArticle = true
        }
      })
      .then(function (err) {
        if (err) {
          console.log(err)
        }
      })
  },
  data () {
    var articles = this.articles
    var hasArticle = this.hasArticle
    return {
      articles: articles,
      hasArticle: hasArticle
    }
  }
}
</script>
