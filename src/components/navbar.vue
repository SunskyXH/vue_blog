<template>
  <header id="header">
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <route-link to="/" id="logo" v-if="$route.path === '/'" >LIT THE BONFIRE</route-link>
        </h1>
        <h2 id="subtitle-wrap">
          <route-link to="/" id="subtitle" v-if="$route.path === '/'" >The fire fades, and the lord goes without thrones</route-link>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"> </a>
          <route-link class="main-nav-link" to="/"><img id="ico" alt="Brand" src="../assets/bonfire.png"></route-link>
          <route-link class="main-nav-link" to="/">Bonfire</li></route-link>
          <route-link class="main-nav-link" v-link="'/about'">About me</li></route-link>
          <a class="main-nav-link" href="http://github.com/SunskyXH">GitHub</li></a>
        </nav>
        <nav id="sub-nav">
        <transition-group name="expand">
          <span  v-if="show">
            <a class="main-nav-link am-icon-rss" href="#" v-if="logstatus"></a>
            <a class="main-nav-link am-icon-pencil" v-if="logstatus" v-link="'/add'"></a>
            <a class="main-nav-link" @click="login()" v-if="!logstatus"><span class="am-icon-sign-in"> </span></a>
            <a class="main-nav-link" @click="logout()" v-if="logstatus"><span class="am-icon-sign-out"> </span></a>
          </span>
        </transition-group>
          
          <a class="main-nav-link" @click="showExpand()"><span v-if="!show" class="am-icon-reorder"> </span><span v-if="show" class="am-icon-remove"> </span></a>
          <a class="main-nav-link" href="http://vuejs.org"><img id="vuelogo" src="../assets/logo.png" ></a>

        </nav>
      </div>
    </div>
  <!--/.navbar -->
  </header>
</template>
<script>
  export default {
    name: 'navbar',
    data () {
      return {
        logstatus: true,
        show: false
      }
    },
    methods: {
      login: function () {
        this.logstatus = true
      },
      logout: function () {
        this.logstatus = false
      },
      showExpand: function () {
        this.show = !this.show
      }
    }

  }

</script>
<style>
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

  .expand-enter-active, .expand-leave-active {
    transition: all .5s ease;
  }

  .expand-enter, .expand-leave-active {
    padding: 0 0;
    opacity: 0;
  }

</style>
