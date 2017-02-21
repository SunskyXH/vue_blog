<template>
  <div class="outer">
    <div class="article">
      <div class="article-inner">
        <header class="article-header" >
          <h1 class="thumb">
            <span class="article-title">标签</span>
          </h1>
        </header>
        <section class="tags-wrap" v-for="tag in tags">
          <div class="tag-year-wrap">
            <h1>
              <span class="tag-year"><i class="fa fa-tags">{{tag.label}}</span>
            </h1>
          </div>
          <div class="tags">
            <article class="tag-article tag-type-post" v-for="article in tag.articles">
              <div class="tag-article-inner">
                <header class="tag-article-header">
                  <router-link class="tag-article-date" :to="{path:'/article/' + article.id}">
                    <time itemprop="datePublished">{{article.date}}</time>
                  </router-link>
                  <h1 class="thumb" itemprop="name">
                    <router-link class="tag-article-title" :to="{path:'/article/' + article.id}">{{article.title}}</router-link>
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
  .tags-wrap {
      margin: 50px 0;
  }
  .tag-year-wrap {
      margin-bottom: 1em;
  }
  .tag-year-wrap h1 {
      font-size: 1.3em;
  }
  h1 {
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 8px;
  }
  .tag-year {
      color: #42b983;
  }
  .tag-year{
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
      .tags {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
  }
  .tags {
    column-gap: 10px;
    margin-left: 2em;
  }
  .tag-article {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    overflow: hidden;
    break-inside: avoid-column;
  }
  .tag-article-inner {
    padding: 0px;
    margin-bottom: 0px;
  }
  .tag-article-date {
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
  .tag-article-title {
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
    this.fetchTags()
  },
  watch: {
    '$route': 'fetchTags'
  },
  methods: {
    fetchTags () {
      console.log(`fetchTags`)
      var tags = [
          {
            label: 'Front End',
            href: 'front-end'
          },
          {
            label: 'Back End',
            href: 'back-end'
          },
      ]
    }
  },
  data () {
    var tags = [
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
                id: '123'
              },
              {
                title: 'DND-tools',
                date: '2016-12-11',
                id: '123'
              },
            ]
          },
          {
            label: 'React',
             articles: [
              {
                title: 'Use Redux-Saga in your application!',
                date: '2017-2-10',
                id: '123'
              },
            ]
          },
          {
            label: 'React Native',
             articles: [
              {
                title: 'DND-tools',
                date: '2016-12-11',
                id: '123'
              },
            ]
          },
          {
            label: 'Vue',
            articles: [
              {
                title: 'Vue-hljs, a highlight.js plugin for your Vue application',
                date: '2017-2-11',
                id: '123'
              },
            ]
          },
      ]
    console.log(tags)
    return {
      tags,
    }
  }
}
</script>
