<template>
    <div id="content" class="outer">
      <section v-for="blog in blogs">
        <blog-article :article='blog'></blog-article>
      </section>
    </div>
</template>
<style scoped>
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
          cat1: 'Front End',
          cat2: 'Server-side Render',
          id: 1,
          title: 'Build Isomorphic JavaScript Application with Server-side Render',
          date: '2017-1-20',
          content: `<h3>What is Isomorphic JavaScript Application?</h3><p>Let me Google that for you</p><h2>Why we use Isomorphic JavaScript?</h2>
          <pre><code>console.log('Hello, World') //vue-hljs test
document.getElementById('foo').innerHTML = 'Hello'</code></pre><blockquote>blockquote test</blockquote>`,
          tags: [{ name: 'JavaScript' }, { name: 'Isomorphic' }]
        },
        {
          cat1: 'Front End',
          cat2: 'Vue',
          id: 2,
          title: 'Use vue-hljs to Highlight your code in Vue Application!',
          date: '2017-1-20',
          content: `<p>wao
          <pre><code>export default class Hello extend React.Component{
  render(){
    return (
      <div>Hello World</div>
    )
  }
}</code></pre><blockquote>blockquote test</blockquote></p>`,
          tags: [{ name: 'JavaScript' }, { name: 'React' }]
        },
      ]
      return {
        blogs: blogs
      }
    }
  }
</script>
