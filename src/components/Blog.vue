<template>
  <div class=" col-sm-9 blog-main">
  <div class="blog-post" v-for="blog in blogs">
        <h2 class="blog-post-title">{{blog.title}}</h2>
        <p class="blog-post-meta">
          <span class="glyphicon glyphicon-calendar"> </span> {{blog.date}}
          &nbsp;&nbsp;&nbsp;
          <span class="glyphicon glyphicon-bookmark"> </span> <a href="#"> {{blog.cat1}} </a> ► <a href="#"> {{blog.cat2}}</a> </p>
          {{{blog.content}}}
        <hr>
        <p> <span class="glyphicon glyphicon-tags"> </span> &nbsp;<span v-for="tag of blog.tags"><span class="label label-success">{{tag}}</span> </span> <a style="float: right;" ><span class="glyphicon glyphicon-option-vertical"> </span> </a> <p>
  </div>
    </div>
</template>
<style>
  /*
   * Globals
   */

  body {
    color: #555;
  }

  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    margin-top: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    color: #333;
  }

  /*
   * Override Bootstrap's default container.
   */

  /*@media (min-width: 1200px) {*/
    /*.container {*/
      /*width: 970px;*/
    /*}*/
  /*}*/

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

  /* Sidebar modules for boxing content */
  .sidebar-module {
    padding: 15px;
    margin: 0 -15px 15px;
  }
  .sidebar-module-inset {
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  .sidebar-module-inset p:last-child,
  .sidebar-module-inset ul:last-child,
  .sidebar-module-inset ol:last-child {
    margin-bottom: 0;
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

  pre {
    background-color: #eee;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;

  }

  blockquote {
    border-left: 3px solid #D0E5F2;
  }

  a {
    color: #009a61;
    text-decoration: none;
    background: transparent;
  }
  hr {
    border: 1px dashed #ddd;
  }

</style>
<script>
  export default {
    ready () {
      this.$http.get('http://localhost:8888/get_articles')
        .then(function (ret) {
          this.blogs = ret.data['articles']
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    },
    data () {
      var blogs = this.blogs
      return {
        blogs: blogs
      }
    }
  }
</script>
