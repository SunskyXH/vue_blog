<template>
  <div class="container1" >
    <div id="wrap" >
      <header id="header">
        <div id="banner"></div>
        <div id="header-outer" class="outer">
            <div id="header-title" class="inner">
              <h1 id="logo-wrap" >
                  <router-link to="/" id="logo" v-if="$route.path === '/'">LIT THE BONFIRE</router-link>
                  <router-link to="/about" id="logo" v-if="$route.path === '/about'">ABOUT ME</router-link>
              </h1>
              <h2 id="subtitle-wrap" >
                <router-link to="/" id="subtitle" v-if="$route.path === '/'">The fire fades, and the lord goes without thrones</router-link>
                <router-link to="/about" id="subtitle" v-if="$route.path === '/about'">Link the fire, Kindle the flame</router-link>
              </h2>
            </div>
            <div id="header-inner" class="inner">
              <nav id="main-nav">
                <a id="main-nav-toggle" class="nav-icon"> </a>
                <router-link class="main-nav-link" to="/"><img id="ico" alt="Brand" src="./assets/bonfire.png"></router-link>
                <router-link class="main-nav-link" to="/">Bonfire</li></router-link>
                <router-link class="main-nav-link" to="/about">About me</li></router-link>
                <a class="main-nav-link" href="http://github.com/SunskyXH">GitHub</li></a>
              </nav>
              <nav id="sub-nav">
                <a class="main-nav-link" @click="refreshFullPage()"><i class="el-icon-loading"></i></a>
                <a class="main-nav-link" href="#"><i class="am-icon-dashboard"></i></a>
                <a class="main-nav-link" href="http://vuejs.org"><img id="vuelogo" src="./assets/logo.png" ></a>
              </nav>
            </div>
        </div>
      </header>

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
  import Sidebar from './components/Sidebar'
  import store from './store/index'
  export default {
    components: {
      Sidebar
    },
    data () {
      return {
        // fullscreenLoading: store.state.loading
      }
    },
    methods: {
      refreshFullPage () {
        store.commit('startLoading')
        setTimeout(() => {
          store.commit('finishLoading')
        }, 1500)
      }
    }
  }
</script>
