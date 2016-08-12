<template>
  <div class=" col-sm-9 blog-main">
  <blog> </blog>
  <about> </about>
  <button @click="toggle">toggle</button>
  </div>
</template>
<style>
  .blog-main {
    font-size: 16px;
    line-height: 1.428;
  }
</style>
<script>
  import Blog from './Blog'
  import About from './About'
  export default{
    components: {
      blog: Blog,
      about: About
    },
    data () {
      return {
        view: 'blog'
      }
    },
    methods: {
      toggle: function () {
        this.view = this.view === 'blog' ? 'about' : 'blog'
      }
    }

  }
</script>
