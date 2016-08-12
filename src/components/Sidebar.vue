<template>
  <div class="col-sm-3  blog-sidebar">
    <div class="sidebar-module sidebar-module-inset">
      <h4>分类</h4>
      <p>学习笔记</p>
      <ol class="list-unstyled">
        <li><a href="#">vue.js</a></li>
      </ol>
      <ol class="list-unstyled">
        <p>开发笔记</p>
        <li><a href="#">JavaScript优化</a></li>
        <li><a href="#">微信Oauth授权</a></li>
      </ol>
      <ol class="list-unstyled">
        <p>无聊的产物</p>
        <li><a href="#">COC小短篇</a></li>
      </ol>
    </div>
    <div class="sidebar-module sidebar-module-inset">
      <h4>归档</h4>
      <ol class="list-unstyled">
        <li><a href="#">没有快滚</a></li>
      </ol>
    </div>
    <div class="sidebar-module sidebar-module-inset">
      <h4>链接</h4>
      <ol class="list-unstyled">
        <li><a href="http://miria.moe">ChionLab</a></li>
      </ol>
    </div>
  </div><!-- /.blog-sidebar -->
</template>
<style>
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
  a {
    color: #009a61;
    text-decoration: none;
    background: transparent;
  }
</style>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
