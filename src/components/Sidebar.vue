<template>
  <div class="blog-sidebar">
    <br>
    <div class="sidebar-module sidebar-module-inset">
      <h4>分类</h4>
      <p>学习笔记</p>
      <ol class="list-unstyled">
        <li><a href="#">Vue</a></li>
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
        <slot v-for="tag in tags" >
          <router-link :to="{ path:'/tag/'+tag.name }" ><span :class="'am-badge '+'am-badge-'+tag.color+' am-round'">{{tag.name}}</span></router-link>&nbsp;
        </slot>

      </ol>
    </div>
  </div><!-- /.blog-sidebar -->
</template>
<style scoped>
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
    color: #13CE66;
    text-decoration: none;
    background: transparent;
  }
</style>
<script>
  export default {
    mounted () {
      this.$http.get('http://localhost:8888/get_tags')
        .then(function (ret) {
          this.tags = ret.data['tags']
        })
        .then(function (err) {
          if (err) {
            console.log(err)
          }
        })
    },
    data () {
      var tags = this.tags
      return {
        tags: tags
      }
    },
    methods: {
    }
  }
</script>
