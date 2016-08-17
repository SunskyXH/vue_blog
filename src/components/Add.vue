<template>
<amButton></amButton>
</template>
<script>
  var amButton = require('amazeui-vue').button
  export default {
    components: {
      'amButton': amButton
    },
    data () {
      return {
        showModal: false
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
<style>
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>