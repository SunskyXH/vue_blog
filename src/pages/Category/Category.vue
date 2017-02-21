<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner">
        <header class="article-header" >
          <h1 class="thumb">
            <span class="article-title">分类</span>
          </h1>
        </header>
        <section class="categorys-wrap" v-for="category in categorys">
          <div class="category-year-wrap">
            <h1>
              <span class="category-year"><i class="fa fa-folder"> {{category.label}}</span>
            </h1>
          </div>
          <div class="categorys">
            <article class="category-article category-type-post" v-for="article in category.articles">
              <div class="category-article-inner">
                <header class="category-article-header">
                  <router-link class="category-article-date" :to="{path:'/article/' + article.id}">
                    <time itemprop="datePublished">{{article.date}}</time>
                  </router-link>
                  <h1 class="thumb" itemprop="name">
                    <router-link class="category-article-title" :to="{path:'/article/' + article.id}">{{article.title}}</router-link>
                  </h1>
                </header>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .categorys-wrap {
      margin: 50px 0;
  }
  .category-year-wrap {
      margin-bottom: 1em;
  }
  .category-year-wrap h1 {
      font-size: 1.3em;
  }
  h1 {
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 8px;
  }
  .category-year {
      color: #42b983;
  }
  .category-year{
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #999;
      margin-bottom: 1em;
      margin-left: 5px;
      line-height: 1em;
      font-weight: bold;
  }
  @media screen and (min-width: 768px){
      .categorys {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
  }
  .categorys {
    column-gap: 10px;
    margin-left: 2em;
  }
  .category-article {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    overflow: hidden;
    break-inside: avoid-column;
  }
  .category-article-inner {
    padding: 0px;
    margin-bottom: 0px;
  }
  .category-article-date {
    min-width: 85px;
    float: left;
    color: #c7c7c7;
    text-decoration: none;
    line-height: 1.6em;
    margin-right: 15px;
    display: block;
    font-size: 1.1em;
    font-family: "futura-pt", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", Microsoft JhengHei, WenQuanYi Micro Hei, "Microsoft YaHei", sans-serif;
  }
  .category-article-title {
    text-decoration: none;
    color: #606060;
    -webkit-transition: color 0.2s;
    -moz-transition: color 0.2s;
    -ms-transition: color 0.2s;
    transition: color 0.2s;
    line-height: 1.6em;
    border-left: 1px solid #42b983;
    padding-left: 15px;
  }

</style>
<script>
export default {
  mounted () {
    this.fetchcategory()
  },
  watch: {
    '$route': 'fetchcategory'
  },
  methods: {
    fetchcategory () {
      console.log(`fetchcategory`)
    }
  },
  data () {
    var categorys = [
          {
            label: 'Front End',
            articles: [
              {
                title: 'Vue-hljs, a highlight.js plugin for your Vue application',
                date: '2017-2-11',
                id: '123'
              },
              {
                title: 'Use Redux-Saga in your application!',
                date: '2017-2-10',
                id: '124'
              },
            ]
          },
          {
            label: 'Node',
            articles: [
              {
                title: 'introduce to egg.js, a framework to build high-performance node server',
                date: '2017-2-11',
                id: '123'
              },
            ]
          },
      ]
    return {
      categorys,
    }
  }
}
</script>
