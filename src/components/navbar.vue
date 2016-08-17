<template>
  <header id=header>
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a v-link="'/'" id="logo" v-if="$route.path === '/'" >LIT THE BONFIRE</a>
          <a v-link="/about" id="logo" v-if="$route.path === '/about'" >ABOUT ME</a>
        </h1>
        <h2 id="subtitle-wrap">
          <a v-link="'/'" id="subtitle" v-if="$route.path === '/'" >The fire fades, and the lord goes without thrones</a>
          <a v-link="'/about'" id="subtitle" v-if="$route.path === '/about'" >Link the fire,Kindle the flame</a>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"> </a>
          <a class="main-nav-link" v-link="'/'"><img id="ico" alt="Brand" src="../assets/bonfire.png"></a>
          <a class="main-nav-link" v-link="'/'"><i class="am-icon-home am-icon-fw"></i> Bonfire</li></a>
          <a class="main-nav-link" v-link="'/about'"><i class="am-icon-user am-icon-fw"></i> About me</li></a>
          <a class="main-nav-link" href="http://github.com/SunskyXH"><i class="am-icon-github am-icon-fw"></i> GitHub</li></a>
        </nav>
        <nav id="sub-nav">
          <span  v-if="show" transition="expand">
            <add v-if="logstatus" > </add>
            <a class="main-nav-link" @click="login()" v-if="!logstatus"><span class="glyphicon glyphicon-log-in"> </span></a>
            <a class="main-nav-link" @click="logout()" v-if="logstatus"><span class="glyphicon glyphicon-log-out"> </span></a>
          </span>
          <a class="main-nav-link" @click="showExpand()"><span v-if="!show" class="glyphicon glyphicon-chevron-left"> </span><span v-if="show" class="glyphicon glyphicon-chevron-right"> </span></a>
          <a class="main-nav-link" href="http://vuejs.org"><img id="vuelogo" src="../assets/logo.png" ></a>

        </nav>
      </div>
    </div>
  <!--/.navbar -->
  </header>
</template>
<script>
  import Add from './Add'
  export default {
    components: {
      Add
    },
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

  .expand-transition {
    transition: all .5s ease;
  }

  .expand-enter, .expand-leave {
    padding: 0 0;
    opacity: 0;
  }

</style>
