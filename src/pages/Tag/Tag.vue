<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner" v-if="hasArticle">
        <header class="article-header" >
          <h1 class="thumb">
            <span class="article-title">包含标签{{$route.params.name}}的文章如下</span>
          </h1>
        </header>
        <section v-for="article in articles">
          <router-link :to="{ path:'/article/'+article.id }"><span class="blog-post-title">{{article.title}}</span></router-link>
          <span class="blog-post-meta">
            <i class="el-icon-date"> {{article.date}}</i>
          </span>
          <hr />
        </section>
      </div>
      <div class="article-inner" v-if="!hasArticle">
        <header class="article-header">
          <h1 class="thumb">
            <span class="article-title">{{$route.params.name}}下暂时没有文章</span>
          </h1>
        </header>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  mounted () {
    this.fetchTags()
  },
  watch: {
    '$route': 'fetchTags'
  },
  methods: {
    fetchTags () {
      console.log(`fetchTags`)
      let articles = []
      let hasArticle = articles.length > 0
    }
  },
  data () {
    let articles = this.articles
    let hasArticle = this.hasArticle
    return {
      articles,
      hasArticle,
    }
  }
}
</script>
