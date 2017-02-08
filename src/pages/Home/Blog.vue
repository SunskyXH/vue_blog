<template>
  <div>
    <br>
    <div class="blog-main" >
        <blog-article :article='blog'></blog-article>
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
  import BlogArticle from '../../components/BlogArticle'
  export default {
    name: 'blog',
    components: {
      BlogArticle
    },
    mounted () {
    },
    watch: {},
    methods: {
    },
    data () {
      var blog = {
        cat1: 'cat1',
        cat2: 'cat2',
        id: 1,
        title: 'title',
        date: '2017-1-20',
        content: `<p>
        <pre><code>console.log('Hello, World') //vue-hljs test</code></pre></p>`,
        tags: [{ name: 'tagName', color: 'success' }]
      }
      return {
        blog: blog
      }
    }
  }
</script>
