<template>
  <header id="header">
    <div id="banner"></div>
    <div id="header-outer" class="outer">
      <div id="header-title" class="inner">
        <h1 id="logo-wrap">
          <router-link to="/" id="logo">LIT THE BONFIRE</router-link>
        </h1>
        <h2 id="subtitle-wrap">
          <router-link to="/" id="subtitle">The fire fades, and the lord goes without thrones</router-link>
        </h2>
      </div>
      <div id="header-inner" class="inner">
        <nav id="main-nav">
          <a id="main-nav-toggle" class="nav-icon"> </a>
          <router-link class="main-nav-link" to="/">
            <img id="ico" alt="Brand" src="../assets/bonfire.png">
          </router-link>
          <slot v-for='link in links'>
            <router-link class="main-nav-link" :to="link.href">{{link.name}}</li></router-link>
          </slot>
          <a class="main-nav-link" href="http://github.com/SunskyXH">GitHub</li></a>
        </nav>
        <nav id="sub-nav">
          <a class="main-nav-link" href="http://vuejs.org"><img id="vuelogo" src="../assets/logo.png" ></a>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'navbar',
    data () {
      return {
        links: [
          {
            name: 'Home',
            href: '/'
          },
          {
            name: 'About Me',
            href: '/about'
          },
          {
            name: 'Archive',
            href: '/archive'
          }
        ]
      }
    },
    methods: {
    }
  }

</script>
<style scoped>
  #ico,
  #vuelogo {
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
</style>
