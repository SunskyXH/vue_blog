<template>
  <a class="main-nav-link" @click="create()"><span class="glyphicon glyphicon-pencil"> </span></a>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      create () {
        this.$http.post('http://localhost:8888/create', {
          content: '<p>暑假利用闲的没事干的时间，接触了一些前端mv*框架，其中<code>vue.js</code>就是我最先开始学习的框架</p> <h3>为什么选用vue?</h3> <p>轻量,简便</p> <h3>使用vue-cli来部署整个项目</h3> <br><pre class="highlight bash"><code> $ npm install -g -vue-cli<br> $ vue init webpack my-project <br> $ cd my-project <br> $ npm install <br> $ npm run dev <br></code></pre> <blockquote> <p>webpack相关：</p><p>其实我根本不会</p> </blockquote> <h3>项目结构</h3>',
          title: '用Vue.js构建web项目',
          date: '2016/7/27',
          cat1: '学习笔记',
          cat2: 'vue.js',
          tags: ['vue.js', 'front-end']
        })
      }
    }
  }
</script>
