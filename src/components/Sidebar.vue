<template>
  <div class="blog-sidebar">
    <br>
    <div class="sidebar-module sidebar-module-inset">
      <h4>分类</h4>
      <p>学习笔记</p>
      <ol class="list-unstyled">
        <li><a href="#">vue.js</a></li>
      </ol>
      <p>开发笔记</p>
      <ol class="list-unstyled">
        <li><a href="#">前端性能优化</a></li>
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
    <div class="sidebar-module sidebar-module-inset">
      <h4>标签们</h4>
      <ol class="list-unstyled">
        <span class="am-badge am-badge-warning am-round">front-end</span>
        <span class="am-badge am-badge-success am-round">vue.js</span>
        <span class="am-badge am-badge-danger am-round">Angular</span>
        <span class="am-badge am-badge-primary am-round">React</span>
        <span class="am-badge am-badge-secondary am-round">React-Native</span>
        <span class="am-badge am-badge-success am-round">back-end</span>
        <span class="am-badge am-badge-danger am-round">database</span>
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
