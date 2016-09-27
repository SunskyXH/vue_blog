<template>
  <router-view></router-view>
</template>
<style>
 /*
 * Globals
 */
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #eee;
    color: #555;

  }
  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    margin-top: 0;
    /*font-family: Menlo,"Helvetica Neue", Helvetica, Arial, sans-serif, ;*/
    /*font-family: Monoca,monospace;*/
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-weight: normal;
    color: #333;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
  a {
    color: #13CE66;
    text-decoration: none;
    background: transparent;
  }
  a:hover,a:link {
    text-decoration: none;
  }
  /*index navbar*/
  #ico ,#vuelogo {
    width: 20px;
    height: 20px;
  }
  #banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/banner4.png") center #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    z-index: -1;
  }
  /*transition*/
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .expand-enter-active, .expand-leave-active {
    transition: all .5s ease;
  }
  .expand-enter, .expand-leave-active {
    padding: 0 0;
    opacity: 0;
  }
</style>
<script>
</script>
