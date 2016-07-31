<template>
  <div id="wrap">
  <header id=header>
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <a href="/" id="logo">Bonfire of Sunsky</a>
        </h1>
        <h2 id="subtitle-wrap">
          <a href="/" id="subtitle">Flame burns here. Dark souls reborn here.</a>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"> </a>
          <a class="main-nav-link" href="#"><img id="ico" alt="Brand" src="../assets/bonfire.png"></a>
          <a class="main-nav-link" href="#">Bonfire</a>
        </nav>
        <nav id="sub-nav">
        </nav>
      </div>
    </div>
  <!--/.navbar -->
  </header>
 </div>
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

  body {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  header, nav {
    display: block;
  }

  #ico {
    width: 20px;
    height: 20px;
  }
  #banner {
    background: url("../assets/banner1.png");
  }

</style>
