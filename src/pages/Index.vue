<template>
  <div class="container1" >
    <div id="wrap" >
      <navbar/>
      <div class="outer">
        <el-row :gutter="35">
          <el-col :span="18">
            <transition name="fade" mode="out-in">
              <router-view class="view"></router-view>
            </transition>
          </el-col>
          <el-col :span="6">
            <sidebar></sidebar>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
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
    height: 100%;
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
    text-decoration: none;
    background: transparent;
  }
  a:hover,a:link,a:focus {
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
    background: url("../assets/banner4.png") center #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    z-index: -1;
  }
  code {
    font-family: Menlo, Consolas, Monaco,monospace;
    padding: 2px 4px;
    border-radius: 4px;
    color: #c7254e;
    background-color: #FFF;
  }
  pre {
    padding: 0;
    font-size: 16px;
    border: 0 solid;
  }
  pre .hljs, code .hljs {
    font-size: 18px;
    font-family: Menlo, Consolas, Monaco,monospace;
    border-radius: 4px;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
  }
  blockquote {
    font-size: 18px;
    border-left: 3px solid #D0E5F2;
    padding: 10px 20px;
    margin: 20px 0 20px;
  }
  hr {
    border: 1px dashed #ddd;
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
  import Navbar from '../components/Navbar'
  import Sidebar from '../components/Sidebar'
  import store from '../store/index'
  export default {
    name: 'index',
    components: {
      Sidebar,
      Navbar
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
