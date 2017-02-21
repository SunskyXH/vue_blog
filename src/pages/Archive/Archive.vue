<template>
  <div id="content" class="outer">
    <section id="main">
      <div class="archives-tags-wrap">
        <blockquote><span>目前一共有{{articleNum}}篇文章</span></blockquote>
        <section class="archives-wrap" v-for="archive in archives">
          <div class="archive-year-wrap">
            <h1>
              <span class="archive-year"><i class="fa fa-calendar"> {{archive.year}}</span>
            </h1>
          </div>
          <div class="archives">
            <article class="archive-article archive-type-post" v-for='article in archive.articles'>
              <div class="archive-article-inner">
                <header class="archive-article-header">
                  <router-link class="archive-article-date" :to="{path:'/article/' + article.id}">
                    <time itemprop="datePublished">{{article.date}}</time>
                  </router-link>
                  <h1 class="thumb" itemprop="name">
                    <router-link class="archive-article-title" :to="{path:'/article/' + article.id}">{{article.title}}</router-link>
                  </h1>
                </header>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<style scoped>
  @media screen and (min-width: 768px) {
      #main {
          display: inline;
          float: left;
          width: 100%;
          margin: 0 0;
      }
  }
  .outer {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .archives-tags-wrap {
    margin: 50px 0;
  }
  .archives-tags-wrap blockquote {
    padding: 1em;
    margin: 4em 0 0 0;
    font-size: 1.2em;
    font-weight: bold;
    color: #33363b;
    text-align: center;
    border-left: 0px solid #42b983;
    background: rgba(208,211,248,0.15);
  }
  .archives-wrap {
      margin: 50px 0;
  }
  .archive-year-wrap {
      margin-bottom: 1em;
  }
  .archive-year-wrap h1 {
      font-size: 1.3em;
  }
  h1 {
      font-size: 16px;
      margin-top: 8px;
      margin-bottom: 8px;
  }
  .archive-year {
      color: #42b983;
  }
  .archive-year{
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
      .archives {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
  }
  .archives {
    column-gap: 10px;
    margin-left: 2em;
  }
  .archive-article {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    overflow: hidden;
    break-inside: avoid-column;
  }
  .archive-article-inner {
    padding: 0px;
    margin-bottom: 0px;
  }
  .archive-article-date {
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
  .archive-article-title {
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
  name: 'archive',
  data() {
    var archives = [
      {
        year: '2017',
        articles:[
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
        ]
      },
      {
        year: '2016',
        articles: [
          {
            title: 'DND-tools',
            date: '2016-12-11',
            id: '123'
          },
        ]
      }
    ]
    var articleNum = 3
    return {
      archives,
      articleNum,
    }
  }
}
</script>
