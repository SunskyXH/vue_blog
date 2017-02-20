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
      var articles = []
      var hasArticle = false
    }
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
