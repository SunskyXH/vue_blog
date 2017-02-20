<template>
  <article class="article article-type-post">
    <div class="article-inner">
      <header class="article-header">
        <h1 class="thumb">
          <router-link class="article-title" :to="{path:'/article/' + article.id}">{{article.title}}</router-link>
        </h1>
      </header>
      <div class="article-meta">
        <span class="article-date" ><i class="fa fa-calendar"></i> {{article.date}}</span>
        <router-link class="article-category" :to="{path:'/category/' + article.category.href}"><i class="fa fa-folder"></i> {{article.category.label}}</router-link>
      </div>
      <div class="article-entry" v-html="article.content" v-highlight></div>
      <footer class="article-footer">
        <slot v-for="tag of article.tags">
          <router-link class="article-tag-link" :to="{ path:'/tag/'+tag.href }"><i class="fa fa-tag"></i> {{tag.label}}</router-link>&nbsp;
        </slot>
      </footer>
    </div>
  </article>
</template>
<style>
  .article {
    color: #555;
    margin: 50px 0;
    font-family: Menlo, "open sans", "Helvetica Neue", Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Microsoft Yahei, sans-serif;
  }
  .article-inner {
    overflow: hidden;
    border: 0px solid #eef1f8;
    background: #fff;
    border-radius: 3px;
  }
  .article-header {
    text-align: center;
  }
  .article-header .thumb {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .article-title {
    text-decoration: none;
    font-weight: bold;
    color: #555;
    line-height: 1.1em;
    -webkit-transition: color 0.2s;
    -moz-transition: color 0.2s;
    -ms-transition: color 0.2s;
    transition: color 0.2s;
  }
  .article-meta {
    text-align: center;
    font-size: 0.9em;
    margin: 1.5em 0 1em 0;
  }
  .article-date,
  .article-category {
    text-decoration: none;
    /*text-transform: uppercase;*/
    letter-spacing: 2px;
    color: #999;
    margin-bottom: 1em;
    margin-left: 5px;
    line-height: 1em;
    font-weight: bold;
  }
  .article-date {
    text-align: center;
    font-weight: normal;
  }
  .article-category {
    margin: 0 12px 1em;
    font-weight: normal;
  }
  .article-entry {
    color: #606060;
    padding: 0 20px;
  }
  .article-entry table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .article-entry td {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  .article-entry p {
    line-height: 1.6em;
    margin: 1.6em 0;
  }
  .article-footer {
    font-size: 0.85em;
    line-height: 1.6em;
    border-top: 1px solid rgba(208,211,248,0.25);
    padding-top: 1.6em;
    margin: 0 20px 20px;
  }
  .article-tag-link {
    display: inline-block;
    font-size: 0.9em;
    line-height: 1em;
    padding: 8px 15px;
    border-radius: 15px;
    background: #f9fbfd;
    border: 1px solid #eef1f8;
    color: #42b983;
    text-decoration: none;
    -webkit-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
</style>
<script>
export default {
  name: 'blog-article',
  props:['article'],
  data () {
    return {
    }
  }
}
</script>
