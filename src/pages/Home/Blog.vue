<template>
    <div id="content" class="outer">
      <section v-for="blog in blogs">
        <blog-article :article='blog'></blog-article>
      </section>
    </div>
</template>
<style>
  .outer {
    min-height: 585px;
    max-width: 1040px;
    margin: 0 auto;
    padding: - 20px;
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
      var blogs = [
        {
          category: { label: 'Front End', href: 'front-end' },
          id: 1,
          title: 'Build Isomorphic JavaScript Application with Server-side Render',
          date: '2017-1-20',
          content: `<blockquote><p>This article tells about Isomorphic JavaScript Application and the sences we need it</p></blockquote><h3>What is Isomorphic JavaScript Application?</h3><p>Let me Google that for you</p><h2>Why we use Isomorphic JavaScript?</h2>
          <pre><code>console.log('Hello, World') //vue-hljs test
document.getElementById('foo').innerHTML = 'Hello'</code></pre>`,
          tags: [{ label: 'JavaScript', href: 'javascript' }, { label: 'Isomorphic', href: 'isomorphic' }]
        },
        {
          category: { label: 'Front End', href: 'front-end' },
          id: 2,
          title: 'Vue使用Highlight.js美化代码解决方案',
          date: '2017-1-20',
          content: `<p>Vue使用Highlight.js美化代码解决方案
          <pre><code>export default class Hello extend React.Component{
  render() {
    return (
      &lt;div>Hello World&lt;/div>
    )
  }
}</code></pre><blockquote>Vue使用Highlight.js美化代码解决方案</blockquote></p>`,
          tags: [{ label: 'JavaScript', href: 'javascript' }, { label: 'React', href: 'react' }]
        },
      ]
      return {
        blogs: blogs
      }
    }
  }
</script>
