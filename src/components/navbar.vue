<template>
  <header id=header>
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a href="/" id="logo">LIT THE BONFIRE</a>
        </h1>
        <h2 id="subtitle-wrap">
          <a href="/" id="subtitle">The fire fades, and the lord goes without thrones</a>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"> </a>
          <a class="main-nav-link" href="#"><img id="ico" alt="Brand" src="../assets/bonfire.png"></a>
          <a class="main-nav-link" href="#">Bonfire</a>
        </nav>
        <nav id="sub-nav">
          <a class=" main-nav-link" href="http://vuejs.org"><img id="vuelogo" src="../assets/logo.png" ></a>
        </nav>
      </div>
    </div>
  <!--/.navbar -->
  </header>
</template>
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
<style>



  #ico ,#vuelogo{
    width: 20px;
    height: 20px;
  }

  #banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/banner5.png") center #000;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    z-index: -1;

  }
</style>
