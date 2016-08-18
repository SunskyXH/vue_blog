<template>
<a class="main-nav-link am-icon-pencil" @click="create()"></a>
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
          content: '`markdown ` ## title.  - ol1',
          title: 'markdown测试',
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